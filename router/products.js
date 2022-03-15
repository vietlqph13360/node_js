const express = require("express");
const route = express.Router();
route.get("/product", (request, response) => {
    response.send(`
    
    <h1>product page  2</h1>
    <p>le quoc viet</p>
    
    `);
});




module.exports = route;