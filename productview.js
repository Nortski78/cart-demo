import { publish } from "./pubsub.js";

export const productView = (productList) => {
    
    const listContainer = document.createElement('ul');
    listContainer.classList.add('product-list');    
    
    productList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = item.getName();
        listItem.setAttribute('id', item.getId());
        listContainer.appendChild(listItem);

        listItem.addEventListener('click', () => { 
            publish('productAdded', item); // change to object when working
        });
    });

    return listContainer;
};