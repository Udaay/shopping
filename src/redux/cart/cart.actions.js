import CartActionTypes from "./cart.types";

export const ToggleCart = ()=> ({
  type: CartActionTypes.TOGGLE_CART,
})

export const AddToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
})

export const ClearItem = (item)=> ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
})

export const RemoveItem = (item)=> ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
})