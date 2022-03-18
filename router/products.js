// const express = require("express");
import express from "express";
import { response } from "express";
import { request } from "http";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
const Productroute = express.Router();
Productroute.get("/product", listProduct);
Productroute.get("/product/:id", listProductDetail)
Productroute.post("/product", createProduct);
Productroute.delete("/product/:id", deleteProduct);
Productroute.put("/product/:id", updateProduct);



export default Productroute;