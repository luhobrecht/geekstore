const express = require("express");
const path = require ("path")
const app = express();

const rutasProductos = require ("./routes/productos")
const rutasMain = require ("./routes/main")
const rutasUser = require ("./routes/user")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.listen(3000, () => {
     console.log("Funciona todo bien");
});

app.use("/", rutasMain);

app.use("/productos", rutasProductos);

app.use("/user", rutasUser);
