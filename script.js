import Product from "./product.js";
import { Event } from "./event.js";
import { productView } from "./productview.js";
import "./cartcontroller.js";
import {renderCart} from "./cartview.js";
import {subscribe} from "./pubsub.js";

let items = [];

let product1 = Product(1, "Samsung TV");
let product2 = Product(2, "GTX 3090ti");
let product3 = Product(3, "Lenovo Laptop");

items.push(product1, product2, product3);

const productContainer = document.querySelector('#product-view');
productContainer.appendChild(productView(items));
const cartContainer = document.querySelector('#cart-view');

const updateCartModule = (() => {
    subscribe('productAdded', () => {
        cartContainer.innerHTML = "";
        cartContainer.appendChild(renderCart());
    })
})();







