import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img className="item-img" src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{`${price} x ${quantity}`}</span>
      </div>
    </div>
  );
};

export default CartItem;
