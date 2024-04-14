import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { wishlistActions } from "../store/wishlistSlice";
import "../index.css"

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(wishlistActions.removeFromWishList(item.id));
  };

  const finalPrice = Math.floor((item.price % item.discountPercentage) * 100)

  return (
    <Card
      style={{ width: "22rem", position: "relative" }}
      className="d-flex flex-row my-2 px-2"
    >
      <img
        src={item.thumbnail}
        width="140px"
        height="140px"
        className="align-self-center object-fit-cover"
      />
      <Card.Body>
        <Card.Title as="h6" >{item.title}</Card.Title>
        <Card.Text as="p">
          {item?.rating?.stars} ⭐ | {item?.rating}
        </Card.Text>
        <Card.Text>
        <span className="current-price">Rs {item.price}</span>
        <span className="original-price">Rs {finalPrice}</span>
        <span className="discount px-2">
          ({item.discountPercentage}% OFF)
        </span>
        </Card.Text>
        <Card.Text as="p">
        Delivered by {" "} <b style={{ color: "green" }}>{item.brand}</b>
        </Card.Text>
        <span
          variant="light"
          style={{ position: "absolute", top: "15px", right: "10px" }}
          onClick={handleDelete}
        >
          <RxCross1  size="18px" cursor="pointer" />
        </span>
      </Card.Body>
    </Card>
  );
};

export default WishlistItem;
