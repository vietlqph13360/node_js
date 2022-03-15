const express = require("express");
const route = express.Router();
route.get("/", (request, response) => {
    response.send(`
    
    <h1>Hom page</h1>
    <p>bcndd</p>
    
    `);
});




module.exports = route;