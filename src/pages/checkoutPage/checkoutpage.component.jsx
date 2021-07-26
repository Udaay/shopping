import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
  selectCartItems,
  selectCartTotalAmount,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import "./checkoutpage.styles.scss";

const CheckoutPage = ({ cartItems, totalAmount }) => (
  <div className="checkout-page-container">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item, i) => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className="total-checkout-amount">
      <span>{`TOTAl: $${totalAmount}`}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectCartTotalAmount,
});

export default connect(mapStateToProps)(CheckoutPage);
