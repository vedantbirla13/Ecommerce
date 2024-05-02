import React, { useState } from "react";
import { Breadcrumb, Button, Col, Container, Image, Row } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import HomeItem from "./HomeItem";
import { wishlistActions } from "../store/wishlistSlice";
import { bagActions } from "../store/bagSlice";
import { useLocation } from "react-router-dom";

const SingleProduct = ({ singleProduct }) => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const items = useSelector((state) => state.items);
  const wishlistItems = useSelector((state) => state.wishlist);
  const bagItems = useSelector((state) => state.bag);
  const wishlistElementFound = wishlistItems.includes(singleProduct.id);
  const bagElementFound = bagItems.includes(singleProduct.id);

  const finalPrice = Math.floor(
    (singleProduct.price % singleProduct.discountPercentage) * 100
  );

  const handleClick = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };

  const category = items.filter(
    (item) =>
      item.category === singleProduct.category && item.id !== singleProduct.id
  );

  const addToWishlist = () => {
    dispatch(wishlistActions.addItemsToWishList(singleProduct.id));
  };

  const removeFromWishList = () => {
    dispatch(wishlistActions.removeFromWishList(singleProduct.id));
  };

  const addItemToBag = () => {
    dispatch(bagActions.addToBag(singleProduct.id));
  };

  const removeFromBag = () => {
    dispatch(bagActions.removeFromBag(singleProduct.id));
  };
  const date = new Date();
  const nextDate = new Date(date.setDate(date.getDate() + 3));
  const day = nextDate.getDate();
  const month = nextDate.toLocaleString("default", { month: "long" });
  const formattedDate = `${month} ${day} `;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const { pathname } = useLocation();
 

  return (
    <Container  className="">
      <Breadcrumb className="mx-5 mt-4">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active >Products</Breadcrumb.Item>
      <Breadcrumb.Item active>product {pathname} </Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mx-4">
        <Col xl={7} lg={12} md={12}>
          {
            <div className="single-prod-container">
              {singleProduct &&
                singleProduct?.images?.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt=""
                    width="400px"
                    height="400px"
                    className="single-prod-image"
                    onClick={() => handleClick(image)}
                  />
                ))}
            </div>
          }
        </Col>
        <Col xl={5} lg={12} md={12}>
          <Row >
            <Col>
              <div className="my-4">
                <h2 style={{ fontFamily: "Poppins" }}>{singleProduct.title}</h2>
                <div>{singleProduct.brand}</div>
                <div className="single-prod-rating px-2 py-1">
                  {singleProduct.rating} ⭐ | 50 ratings
                </div>
                <hr />
              </div>
              <div className=" single-prod-price">
                <b className=" me-2">Rs {singleProduct?.price}</b>
                <span className=" me-2">
                  MRP{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    {" "}
                    Rs {finalPrice}
                  </span>
                </span>
                <b className="single-prod-discount">
                  ({singleProduct?.discountPercentage}% OFF)
                </b>
                <br />
                <b
                  style={{ fontSize: "15px", color: "green" }}
                  className="my-1 "
                >
                  Inclusive of all taxes
                </b>
              </div>

              <div className="my-3">
                <p>{singleProduct.description}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet necessitatibus harum possimus quaerat dolor minus
                  nesciunt architecto alias reprehenderit cumque, magni officia
                  dicta eos quia facilis perferendis tempore minima,
                  consequuntur voluptatibus doloremque et voluptates? Quod ex,
                  autem numquam quis neque sit repellendus laboriosam sequi
                  repellat ipsa possimus eveniet aliquam molestias.
                </p>
              </div>
              <hr />

              <div className="single-prod-button my-4">
                {bagElementFound ? (
                  <button
                    className="add_to_bag_button py-3 px-5"
                    onClick={removeFromBag}
                  >
                    {" "}
                    <FaShoppingBag /> Added to bag
                  </button>
                ) : (
                  <button
                    className="add_to_bag_button py-3 px-5"
                    onClick={addItemToBag}
                  >
                    {" "}
                    <FaShoppingBag /> Add to bag
                  </button>
                )}

                {wishlistElementFound ? (
                  <button
                    className="wishlist_button py-3 px-5 "
                    onClick={removeFromWishList}
                  >
                    {" "}
                    <FaHeart size="20px" color="red" /> Wishlisted
                  </button>
                ) : (
                  <button
                    className="wishlist_button py-3 px-5 "
                    onClick={addToWishlist}
                  >
                    {" "}
                    <CiHeart size="20px" /> Wishlist
                  </button>
                )}
              </div>

              <hr />

              <div>
                <b className=" me-2">Rs {singleProduct?.price}</b>
                <span className=" me-2">
                  MRP{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    {" "}
                    Rs {finalPrice}
                  </span>
                </span>
                <b className="single-prod-discount">
                  ({singleProduct?.discountPercentage}% OFF)
                </b>

                <div>
                  <p style={{ fontFamily: "poppins", marginBottom: 0 }}>
                    Get it by {daysOfWeek[nextDate.getDay()]} , {formattedDate}{" "}
                    - 421301
                  </p>
                  <b style={{ fontFamily: "poppins" }}>
                    Seller:{" "}
                    <span style={{ color: "red", fontFamily: "poppins" }}>
                      {singleProduct.brand}
                    </span>
                  </b>
                </div>
                <hr />
                <div className="my-4">
                  <h5 style={{ fontFamily: "Poppins" }}>
                    DELIVERY OPTIONS {"  "}
                    <CiDeliveryTruck size="30px" />{" "}
                  </h5>
                  <div className="single-prod-options my-4">
                    <span>
                      <FaTruckFast size="24px" /> Get it by{" "}
                      {daysOfWeek[nextDate.getDay()]} , {formattedDate} - 421301
                    </span>
                    <span>
                      <MdOutlinePayment size="24px" /> Pay on delivery available
                    </span>
                    <span>
                      <FaExchangeAlt size="24px" /> Easy 7 days return &
                      exchange available
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image
            src={selectedImage}
            width="760px"
            height="600px"
            className="zoom-image"
          />
        </Modal.Body>
      </Modal>
      <hr />

      <div className="my-5 ">
        <h5 style={{ fontFamily: "poppins" }} className="ms-4 my-4">
          SIMILAR PRODUCTS
        </h5>
        <div className="related-products ms-3">
          {category.map((prod) => (
            <HomeItem item={prod} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
