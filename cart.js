import { subscribe } from "./pubsub.js";

export const Cart = () => {
    let items = [];

    const getItems = () => items;
    const addItem = (item) => {
        items.push(item);
    }

    return {getItems, addItem};
};