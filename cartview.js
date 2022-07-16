import { getCart } from "./cartcontroller.js";

export const renderCart = () => {
    const cartContainer = document.createElement('ul');

    getCart().getItems().forEach(item => {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', item.getId());
        listItem.innerText = item.getName();
        cartContainer.appendChild(listItem);
    });

    return cartContainer;
}