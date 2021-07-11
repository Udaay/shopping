export const addItemToCart = (cartItems, itemToAdd)=>{
  const itemExisted = cartItems.find(({id})=> itemToAdd.id === id);
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
  console.log(cartItem, 'calculate');
  cartItem.forEach(({quantity})=> totalItems+=quantity )
  return totalItems;
}
