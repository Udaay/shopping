import React from "react";
import { connect } from "react-redux";
import {
  ClearItem,
  AddToCart,
  RemoveItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, ClearItem, AddToCart, RemoveItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Product"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow decrease-quantity"
          onClick={() => {
            RemoveItem(item);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow increase-quantity"
          onClick={() => AddToCart(item)}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => ClearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ClearItem: (item) => dispatch(ClearItem(item)),
  AddToCart: (item) => dispatch(AddToCart(item)),
  RemoveItem: (item) => dispatch(RemoveItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
