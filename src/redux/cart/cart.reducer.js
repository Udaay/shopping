import CartActionTypes from './cart.types';

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
      cartItems: [...state.cartItems, payload]
    }
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        cartHidden: !state.cartHidden
      }
    default:
      return state;
  }
}

export default cartReducer;