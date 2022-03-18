import Product from '../models/products'
const products = [
    { id: 1, name: "Việt" },
    { id: 2, name: "Việt2" }
]
export const listProduct = (request, response) => {
    response.json(products);
}
export const listProductDetail = (request, response) => {
    const product = products.find(item => item.id === +request.params.id);
    response.json(product);
};
export const createProduct = (request, response) => {
    products.push(request.body);
    response.json(products);
}
export const deleteProduct = (request, response) => {
    const product = products.filter(item => item.id != +request.params.id);
    response.json(product);
}
export const updateProduct = (request, response) => {
    response.json(products.map(item => item.id === +request.params.id ? request.body : item))
}