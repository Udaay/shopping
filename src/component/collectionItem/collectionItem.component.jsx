import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom -buttons/custom-button.component";
import { AddToCart } from "../../redux/cart/cart.actions";

import "./collectionItem.styles.scss";

const CollectionItem = ({ item, AddToCartHandler }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collectionItem">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="image"
      ></div>
      <div className="itemFooter">
        <span className="name"> {name} </span>
        <span className="price"> {`$${price}`} </span>
      </div>
      <CustomButton inverted onClick={() => AddToCartHandler(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddToCartHandler: (item) => dispatch(AddToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
