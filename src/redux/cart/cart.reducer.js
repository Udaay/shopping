import CartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE , action)=>{
  const {type, payload} = action;
  switch(type){
    case CartActionTypes.ADD_TO_CART: 
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, payload)
    }
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        cartHidden: !state.cartHidden
      }
    case CartActionTypes.CLEAR_ITEM:
      return{
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id)
      }
    case CartActionTypes.REMOVE_ITEM:
      return{
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      }
    default:
      return state;
  }
}

export default cartReducer;