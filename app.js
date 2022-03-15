//b1 : include thư viện http
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const homroute = require("./router/hom")
app.use(homroute);
const productRoute = require("./router/products")
app.use(productRoute);
const productDetailRoute = require("./router/product_detail")
app.use(productDetailRoute);
// app.get("/product",(request,response)=>{
// response.send(`
// <h1>product page</h1>
// `);
// });

// app.get("/product/:id",(request,response)=>{
// response.send(`
// <h1>detail product page</h1>
// ${request.params.id}
// `);

// });





// //b2: khởi tạo server 
// const server = http.createServer((request,response)=>{
// console.log(request.url);
// if(request.url==="/"){
//     // console.log("hom page");
//     response.setHeader("Content-Type","text/html");
//     response.write("<h1>Hom page</h1>");
//     response.end();

// }
// if(request.url==="/product"){
//     // console.log("product page");
//     response.setHeader("Content-Type","text/html");
//     response.write("<h1>product page</h1>");
//     response.end();
// }
// if(request.url==="/new"){
//     // console.log("product page");
//     response.setHeader("Content-Type","text/html");
//     response.write("<h1>new page</h1>");
//     response.end();
// }
// });
// b3 : lắng nghe cổng thực thi 
const port = 3001;
server.listen(port, () => {
    console.log(`server is running on ${port}`);
});