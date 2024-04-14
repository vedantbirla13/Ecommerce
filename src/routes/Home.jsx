import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
import Filters from "../components/Filters";
import axios from 'axios';

const Home = () => {


    const filteredProducts = useSelector(
      (state) => state.filter.filteredProducts
    );

    // Assuming you are using a library like axios for making HTTP requests

// Function to fetch products from Dummy JSON API
// const fetchProducts = async () => {
//   try {
//     const response = await axios.get('https://dummyjson.com/products');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return [];
//   }
// };

// // Function to filter products based on multiple categories
// const filterProductsByCategories = (products, categories) => {
//   console.log(products, categories)
//   return products.products.filter(product => {
//     return categories.includes(product.category);
//   });
// };

// // Example usage
// const categoriesToFilter = ['smartphones', 'laptops'];
// fetchProducts()
//   .then(products => {
//     const filteredProducts = filterProductsByCategories(products, categoriesToFilter);
//     console.log(filteredProducts);
//   })
//   .catch(error => {
//     console.error('Error fetching or filtering products:', error);
//   });


  return (
    <main>
      <div className="home">
        <Filters />
        <div className="items-container">
          {filteredProducts?.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
