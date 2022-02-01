const express = require("express");

const app = express();

const path = require("path");

app.use(express.static('public'));


app.listen(3000, () => {
     console.log("Funciona todo bien");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
})

app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/productDetail.html"));
})

app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/productCart.html"));
})
app.get("/productCart2", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/productCart2.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
})