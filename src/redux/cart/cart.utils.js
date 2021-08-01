export const addItemToCart = (cartItems, itemToAdd)=>{
  const itemExisted = cartItems.find(({id})=> itemToAdd.id === id);
  console.log(itemExisted);
  if(itemExisted){
    return cartItems.map((cartItem)=>(
      cartItem.id === itemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    ));
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 } ];
}

export const totalQuantity = (cartItem)=> {
  let totalItems = 0;
  cartItem.forEach(({quantity})=> totalItems+=quantity )
  return totalItems;
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const itemInCart = cartItems.find(cartItem => cartItem.id === itemToRemove.id);
  const { quantity } = itemInCart;
  if(quantity === 1){
    return cartItems.filter(cartItem=> cartItem.id !== itemToRemove.id)
  } 

  return cartItems.map(cartItem => (
    cartItem.id === itemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  ))
}
