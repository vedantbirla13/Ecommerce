import React from "react";
import { FaHeart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="action_container">
        <FaHeart color="red" />
        <span className="action_name">Wishlist</span>
      </div>
    </div>
  );
};

export default Sidebar;