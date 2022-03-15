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


const app = express();
app.use(express.json());
app.use(Homeroute);
app.use(Productroute);



const port = 3001;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});