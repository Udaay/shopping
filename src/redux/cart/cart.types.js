const CartActionTypes = {
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_TO_CART: 'ADD_TO_CART',
  CLEAR_ITEM: 'CLEAR_ITEM', // remove item from cart irrespective of number of quantity.
  REMOVE_ITEM: 'REMOVE_ITEM' // remove item from cart by one quantity
}

export default CartActionTypes;