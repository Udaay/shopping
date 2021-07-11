import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingLogo } from "../../assets/shopping-bag.svg";
import { ToggleCart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";

const CartIcon = ({ ToggleCartHandler, totalItemCount }) => (
  <div className="cart-icon" onClick={ToggleCartHandler}>
    <ShoppingLogo className="cart-logo" />
    <span className="item-count">{totalItemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  totalItemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHandler: () => dispatch(ToggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
