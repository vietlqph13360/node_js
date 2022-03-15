// const express = require("express");
import express from "express";
import { response } from "express";
import { request } from "http";
const Productroute = express.Router();
const products = [
    { id: 1, name: "Việt" },
    { id: 2, name: "Việt2" }
]
Productroute.get("/product", (request, response) => {
    response.json(products);
});
Productroute.get("/product/:id", (request, response) => {
    const product = products.find(item => item.id === +request.params.id);
    response.json(product);
})
Productroute.post("/product", (request, response) => {
    products.push(request.body);
    response.json(products);
})



export default Productroute;