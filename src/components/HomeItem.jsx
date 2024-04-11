import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);

  const elementFound = bagItems.includes(item.id);

  const addItemToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const removeFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id))
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item?.image} alt="item image" />
      <div className="rating">
        {item?.rating?.stars} ⭐ | {item?.rating?.count}
      </div>
      <div className="company-name">{item?.company}</div>
      <div className="item-name">{item?.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item?.current_price}</span>
        <span className="original-price">Rs {item?.original_price}</span>
        <span className="discount">({item?.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          className="btn-add-bag btn btn-danger"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
          onClick={removeFromBag}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          className="btn-add-bag btn btn-success"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
          onClick={addItemToBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
