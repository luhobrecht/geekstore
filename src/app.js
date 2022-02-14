const express = require("express");

const app = express();

const rutasProductos = require ("./routes/productos")
const rutasMain = require ("./routes/main")
const rutasUser = require ("./routes/user")

app.listen(3000, () => {
     console.log("Funciona todo bien");
});

app.use("/", rutasMain);

app.use("/productos", rutasProductos);

app.use("/user", rutasUser);

app.use(express.static('public'));
