import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { wishlistActions } from "../store/wishlistSlice";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css"

const HomeItem = ({ item,index }) => {
  console.log(index)
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const wishlistItems = useSelector((state) => state.wishlist);

  const bagElementFound = bagItems.includes(item.id);
  const wishlistElementFound = wishlistItems.includes(item.id);

  const addItemToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const removeFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const addToWishlist = () => {
    dispatch(wishlistActions.addItemsToWishList(item.id));
  };

  const removeFromWishList = () => {
    dispatch(wishlistActions.removeFromWishList(item.id));
  };

  const finalPrice = Math.floor((item.price % item.discountPercentage) * 100);

  return (
    <>
    <div className="item-container" style={{ marginTop: index < 4 ? '40px' : "20px"  }}>
      <Link to={`/${item.id}`}>
      <img className="item-image" src={item?.thumbnail} alt="item image" />
      </Link>
      <div className="rating">
        {item?.rating?.stars} ⭐ | {item?.rating}
      </div>
      <div className="company-name">{item?.description}</div>
      <div className="item-name py-1">{item?.title}</div>
      <div className="price">
        <span className="current-price">Rs {item?.price}</span>
        <span className="original-price">Rs {finalPrice}</span>
        <span className="discount">({item?.discountPercentage}% OFF)</span>
        <div className="Wishlist-item">

          {wishlistElementFound ? (
            <FaHeart
              title="Wishlisted"
              cursor="pointer"
              size="20px"
              onClick={removeFromWishList}
              color="red"
            />
          ) : (
            <CiHeart
              title="Wishlist"
              cursor="pointer"
              size="20px"
              onClick={addToWishlist}
              color="red"
            />
          )}
        </div>
      </div>

      {bagElementFound ? (
        <button
          className="btn-add-bag btn btn-outline-danger"
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
          className="btn-add-bag btn btn-outline-dark"
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
    </>
  );
};

export default HomeItem;
