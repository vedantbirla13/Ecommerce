import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import "../index.css";
import { filterActions } from "../store/filterSlice";
import Sidebar from "./Sidebar";

const Header = () => {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const bag = useSelector(state => state.bag)
  const items = useSelector(state => state.items)
  


  useEffect(() => {
    dispatch(filterActions.filterItems({ items,search }))
  },[items, search, dispatch])

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="../images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup style={{ color: "red" }}>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <FaRegUser size="19px"  />
          <span className="action_name">Profile</span>
        </div>

       <Sidebar />

        <Link to="/bag" className="action_container">
          <IoBagHandleOutline size="20px" color="black" />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
