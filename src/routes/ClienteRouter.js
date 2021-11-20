const express = require('express');

let clienteController = require('../controllers/ClienteController');

let cliente = express.Router();

    cliente.route('/cliente')
        .get(clienteController.readAll);

    cliente.route('/cliente/:id')
        .get(clienteController.readById);

    cliente.route('/cliente')
        .post(clienteController.create);

    cliente.route('/cliente/:id')
        .delete(clienteController.deleteOne);

    cliente.route('/cliente/:id')
        .put(clienteController.update);

    module.exports = cliente;