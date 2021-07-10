import CartActionTypes from "./cart.types";

export const ToggleCart = ()=> ({
  type: CartActionTypes.TOGGLE_CART,
})

export const AddToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
})