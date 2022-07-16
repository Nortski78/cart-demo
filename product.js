export function Product(id, name) {
    const getId = () => id;
    const getName = () => name;

    return {getId, getName};
}

export default Product;