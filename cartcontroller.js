import { Cart } from "./cart.js";
import { subscribe } from "./pubsub.js"

let cart = Cart();

const cartController = (() => {
    subscribe('productAdded', (item) => {
        cart.addItem(item);
    });
})();

const getCart = () => cart;

export { getCart };