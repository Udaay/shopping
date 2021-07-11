import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, cartHidden }) => (
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
      <div className="option">
        <CartIcon />
      </div>
    </div>
    {cartHidden ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
