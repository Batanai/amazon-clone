import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../state/StateProvider";
import { auth } from "../login/firebase/firebase";

const Navbar = () => {
    const [{basket, user}, dispatch] = useStateValue();

    const login = () => {
      if (user) {
        auth.signOut();
      }
    } 

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="navbar__search">
        <input type="text" className="navbar__searchInput" />
        <SearchIcon className="navbar__searchIcon" />
      </div>

      <div className="navbar__nav">

        <Link to={!user && "/login"} className="navbar__link">
          <div onClick={login} className="navbar__option">
            <span className="navbar__optionLineOne">Hello {user?.email}</span>
            <span className="navbar__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
          </div>
        </Link>

        <Link to="/" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__optionLineOne">Returns</span>
            <span className="navbar__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__optionLineOne">Your</span>
            <span className="navbar__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="navbar__link">
          <div className="navbar__optionBasket">
            <ShoppingBasketIcon />
            <span className="navbar__optionLineTwo navbar__basketCount">{basket?.length}</span>
          </div>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
