let express = require('express');
let rutasDeProcudto = require("./routes/productos");
let rutasDeHome = require("./routes/home");
let rutasDeContato = require("./routes/contactos");

let app = express();

app.listen(3000, () => console.log('Todo esta andando correctamente'));

app.use('/producto', rutasDeProcudto);
app.use('/', rutasDeHome);
app.use('/contacto', rutasDeContato);