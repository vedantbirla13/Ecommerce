import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { filterActions } from "../store/filterSlice";

const Filters = () => {
  const [itemsCategory, setItemsCategory] = useState(new Set());
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [itemsBrands, setItemsBrands] = useState(new Set());
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceChange, setPriceChange] = useState("");
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const categories = new Set(items.map((item) => item.category));
    // As it was stored as set So converted it into array by using "..." for rendering
    setItemsCategory([...categories]);

    const brands = new Set(items.map((item) => item.brand));
    setItemsBrands([...brands]);

    dispatch(filterActions.getAllProducts({ items }))
  }, [items]);


  const handlePriceChange = (e) => {
    setPriceChange(e.target.value);
    dispatch(filterActions.filterPrice(e.target.value));
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;


    let updatedCategories;
    if (checked) {
      updatedCategories = [value, ...selectedCategories];
    } else {
      updatedCategories = selectedCategories.filter((cat) => cat !== value);
    }
  
    setSelectedCategories(updatedCategories);
  
    // Dispatch the updated selected categories to the Redux store
    dispatch(filterActions.catgeoryFilter(updatedCategories));
  };

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;


    let updatedBrands;
    if (checked) {
      updatedBrands = [value, ...selectedBrands];
    } else {
      updatedBrands = selectedBrands.filter((brand) => brand !== value);
    }
  
    setSelectedBrands(updatedBrands);
  
    // Dispatch the updated selected categories to the Redux store
    dispatch(filterActions.brandFilter(updatedBrands));
  };


  const handleClearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceChange("")
    dispatch(filterActions.resetFilters())
  };

  return (
    <div className="filters" style={{ position: "sticky", top: 0 }}>
      <div className="d-flex justify-content-between">
      <h6 className="lead">FILTERS</h6>
      <span style={{ cursor: "pointer", userSelect: "none" }} onClick={handleClearFilters} >
          CLEAR ALL
        </span>
      </div>
      <div className="d-flex flex-column gap-20">
        <p className="filter-heading">Filter by Category</p>
        {Array.from(itemsCategory).map((category) => (
          <>
            <Form.Check
              inline
              key={category}
              label={category}
              type="checkbox"
              value={category}
              onChange={handleCategoryChange}
              checked={selectedCategories.includes(category)}
            />
          </>
        ))}
      </div>

      <div className="my-4">
        <p className="filter-heading">Filter by Price</p>
        <div>
          <Form.Check
            inline
            label="Low to High"
            name="group1"
            type="radio"
            value="lowToHigh"
            id={`inline-2`}
            className="radio"
            onChange={handlePriceChange}
            checked={priceChange === "lowToHigh"}
          />
        </div>
        <div>
          <Form.Check
            inline
            label="High to Low"
            name="group1"
            type="radio"
            value="highToLow"
            id={`inline-2`}
            className="radio"
            onChange={handlePriceChange}
            checked={priceChange === "hightoLow"}
          />
        </div>
      </div>

      <div className="d-flex flex-column gap-20">
        <p className="filter-heading">Filter by Brand</p>
        {Array.from(itemsBrands).map((brand) => (
          <>
            <Form.Check
              inline
              label={brand}
              value={brand}
              type="checkbox"
              onChange={handleBrandChange}
              checked={selectedBrands.includes(brand)}
            />
          </>
        ))}
      </div>

      
    </div>
  );
};

export default Filters;