// const express = require("express");
import express from "express";
const Homeroute = express.Router();
Homeroute.get("/", (request, response) => {
    response.send(`
    
    <h1>Hom page</h1>
    <p>hi , xin chào các bạn 
    </p>
    
    `);
});




export default Homeroute