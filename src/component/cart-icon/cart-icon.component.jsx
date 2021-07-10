import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingLogo } from "../../assets/shopping-bag.svg";
import { ToggleCart } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

const CartIcon = ({ ToggleCartHandler }) => (
  <div className="cart-icon" onClick={ToggleCartHandler}>
    <ShoppingLogo className="cart-logo" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHandler: () => dispatch(ToggleCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
