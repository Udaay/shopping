import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, { quantity }) => accumulatedQuantity + quantity,
    0
  )
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.cartHidden
)

export const selectCartTotalAmount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc,{quantity, price})=> acc + (quantity * price), 0)
)