async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, nameItem) {
  const index = userCart.findIndex((item) => item.name === nameItem);
  if(index !== -1){
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((product) => product.name === item.name)
  if (indexFound == -1){
    console.log("Item não encontrado");
    return;
  }

  if(userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

async function calculateTotal(userCart) {
  console.log("\nShopee Cart Total IS:");
  const result = userCart.reduce((total, item) => total += item.subTotal(), 0);
  console.log(`\nTotal: ${result}`);
}

async function displayCard(userCart){
  console.log("\nShopee cart list: ");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}: ${item.name} | Preço = R$${item.price} | ${item.quantity}x |Subtotal = R$${item.subTotal()}`);
  });
}
export {
  addItem,
  removeItem,
  deleteItem,
  calculateTotal,
  displayCard,
}