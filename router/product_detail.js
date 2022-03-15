const express = require("express");
const route = express.Router();
route.get("/product/:id", (request, response) => {
    response.send(`
    <h1>productDetail page</h1>
    <p>duy</p>
    `);
});
module.exports = route;