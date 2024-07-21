import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"
const cart = [];
const item1 = await createItem("Linguagem de Programação GO", 80.75, 2);
const item2 = await createItem("Mouse sem fio", 63.15, 1);

await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)

await cartService.displayCard(cart)