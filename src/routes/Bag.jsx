import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
import "../index.css";
import { Link } from "react-router-dom";

const bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemFound = bagItems.includes(item.id);
    return itemFound;
  });


  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.length > 0 ? (
              finalItems.map((item) => {
                return <BagItem key={item.id} item={item} />;
              })
            ) : (
              <div className="lead mb-4 display-6 text-center d-flex flex-column">
                <img src="/images/hanger.png" alt="" />
                No Items in the bag
              </div>
            )}
          </div>
          {finalItems.length > 0 ? (
            <div className="bag-summary">
              <BagSummary />
            </div>
          ) : (
            <Link to="/" style={{ textDecoration: "none" }} className="mx-2">
              <button className="btn btn-info py-2 text-white" style={{ fontFamily: "poppins" }}>Continue shopping</button>
            </Link>
          )}
        </div>
      </main>
    </>
  );
};

export default bag;
