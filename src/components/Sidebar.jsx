import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../index.css";
import WishlistItem from "./WishlistItem";

const Sidebar = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.items);

  const filterItems = items.filter((item) => {
    const itemFound = wishlistItems.includes(item.id);
    return itemFound;
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sidebar">
      <div
        className="action_container"
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      >
        <CiHeart size="20px" />
        <span className="action_name">Wishlist</span>
        <span className="bag-item-count">{wishlistItems.length}</span>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="px-2 " style={{ fontFamily: "poppins" }}>My Wishlist </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="wishlist-items-container">
            {filterItems.length > 0 ? (
              filterItems.map((item) => {
                return <WishlistItem key={item.id} item={item} />;
              })
            ) : (
              <div className="no-wishlist">
                <h6 className="wishlist-text">No Items in the wishlist</h6>
                <div className="wishlist-button"a>
                <button onClick={handleClose} className="continue-shopping-btn">Continue shopping</button>
                </div>
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
