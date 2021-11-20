const connDB = require('../connectionDB/ConnDB');

var cliente = require('../models/Cliente.js');

//read - > GET
exports.readAll = function ( req, res ) {
    cliente.find(function(err,clientes) {
        if(!err){
            res.json(clientes);
        } else {
            console.log ( 'ERROR: ' + err);
        }
    });
};

// read one - > GET
exports.readById = function ( req, res ) {
    cliente.findById( req.params.id, function ( err, cliente ) {
        if(!err){
            res.json(cliente);
        } else {
            console.log ( 'ERROR: ' + err);
        }
    });
};

// create one - > POST
exports.create = function ( req, res ) {
    var newcliente = new cliente({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email
    });

    newcliente.save( function ( err ) {
        if ( !err ){
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.json(newcliente);
};

// delete one - > DELETE
exports.deleteOne = async function ( req, res ){
    const id = req.params.id; // cliente/id ej: cliente/168468

    cliente.findByIdAndDelete(id, function(err, clientes) {
        if(!err) {
            res.json(id);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};

// delete all -> DELETE
exports.deleteAll = async function ( req, res ){
    cliente.deleteMany(function(err, res) {
        if(!err) {
            res.json("OK");
        } else {
            console.log('ERROR: ' + err);
        }
    });
};

// update one - > PUT
exports.update = async function ( req, res ){
    const id = req.params.id; // cliente/id ej: cliente/168468

    cliente.findByIdAndUpdate(id, req.body, function(err, clientes) {
        if(!err) {
            res.json(id);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};