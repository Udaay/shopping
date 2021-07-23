import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./checkoutpage.styles.scss";

const CheckoutPage = () => <div className="checkout-page-container"></div>;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
