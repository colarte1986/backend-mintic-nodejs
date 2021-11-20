const express = require('express');

let productoController = require('../controllers/ProductoController');

let producto = express.Router();

    producto.route('/producto')
        .get(productoController.readAll);

    producto.route('/producto/:id')
        .get(productoController.readById);

    producto.route('/producto')
        .post(productoController.create);

    producto.route('/producto/:id')
        .delete(productoController.deleteOne);

    producto.route('/producto/:id')
        .put(productoController.update);

    module.exports = producto;