import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../index.css";
import WishlistItem from './WishlistItem';

const Sidebar = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.items)

 const filterItems = items.filter((item) => {
    const itemFound = wishlistItems.includes(item.id)
    return itemFound
 })


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sidebar">
      <div className="action_container" onClick={handleShow} style={{ cursor: "pointer" }} > 
        <CiHeart size="20px" />
        <span className="action_name">Wishlist</span>
        <span className="bag-item-count">{wishlistItems.length}</span>
      </div>
    
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='px-2'>WishList </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="wishlist-items-container">
            {filterItems.length > 0 ? (
              filterItems.map((item) => {
                return <WishlistItem key={item.id} item={item} />;
              })
            ) : (
              <div className='no-wishlist'>
                <img src="/images/hanger.png" alt="" width="350px" height="200px" />
                <span className='lead mb-4  text-center d-flex'>
                No Items in the wishlist
                </span>
               
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
