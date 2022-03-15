// //b1 : include thư viện http
// const http = require("http");
// const express = require("express");
// const app = express();
// const server = http.createServer(app);
// const homroute = require("./router/hom")
// app.use(homroute);
// const productRoute = require("./router/products")
// app.use(productRoute);
// const productDetailRoute = require("./router/product_detail")
// app.use(productDetailRoute);
import express from "express";
import Homeroute from "./router/hom";
import Productroute from "./router/products";
import Product_detail from "./router/product_detail";


const app = express();
app.use(express.json());
app.use(Homeroute);
app.use(Productroute);
app.use(Product_detail);



const port = 3001;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});