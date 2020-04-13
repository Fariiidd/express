let express = require('express');
let productosController = require('../controllers/productosControllers');

let router = express.Router();

router.get('/:idProducto', productosController.detalle);

router.get('/:idProducto/comentarios/:idComentarios?', productosController.detalleComentarios);

module.exports = router;