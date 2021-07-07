import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option pointer-cursor " onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <div className="option">
          <Link to="/signin" className="option">
            Sign In
          </Link>
        </div>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
