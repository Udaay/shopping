import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="./" className="logo-container">
      <Logo className="Logo" />
    </Link>
    <div className="option-container">
      <div className="option">
        <Link to="/shop" className="option">
          Shop
        </Link>
      </div>
      <div className="option">
        <Link to="/shop" className="option">
          Contact
        </Link>
      </div>
      <div className="option">
        <Link to="/signin" className="option">
          Sign In
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
