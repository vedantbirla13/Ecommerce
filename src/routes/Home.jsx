import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
import Filters from "../components/Filters";
import { Badge, Stack } from "react-bootstrap";

const Home = () => {
  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts
  );

  const selectedFilters = useSelector((state) => state.filter.category);



  return (
    <main>
      <div className="home">
        <Filters />

        <div className={"items-container"} style={{ position: "relative" }}>
          <div >
          <Stack
          direction="horizontal"
          gap={2}
          className="category-badge"
        >
          {selectedFilters.map((product) => (
            <Badge pill bg="secondary" key={product} >
              {product}
            </Badge>
          ))}
        </Stack>
        
          </div>
          {filteredProducts?.map((item, index) => (
              <HomeItem key={item.id} item={item} index={index} />
          ))}
          </div>
      </div>
    </main>
  );
};

export default Home;
