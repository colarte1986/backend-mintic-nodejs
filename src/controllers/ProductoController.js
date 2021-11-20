const connDB = require('../connectionDB/ConnDB');

var producto = require('../models/Producto.js');

//read - > GET
exports.readAll = function ( req, res ) {
    producto.find(function(err,productos) {
        if(!err){
            res.json(productos);
        } else {
            console.log ( 'ERROR: ' + err);
        }
    });
};

// read one - > GET
exports.readById = function ( req, res ) {
    producto.findById( req.params.id, function ( err, producto ) {
        if(!err){
            res.json(producto);
        } else {
            console.log ( 'ERROR: ' + err);
        }
    });
};

// create one - > POST
exports.create = function ( req, res ) {
    var newproducto = new producto({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        stock: req.body.stock,
        precio: req.body.precio
    });

    newproducto.save( function ( err ) {
        if ( !err ){
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.json(newproducto);
};

// delete one - > DELETE
exports.deleteOne = async function ( req, res ){
    const id = req.params.id; // producto/id ej: producto/168468

    producto.findByIdAndDelete(id, function(err, productos) {
        if(!err) {
            res.json(id);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};

// delete all -> DELETE
exports.deleteAll = async function ( req, res ){
    producto.deleteMany(function(err, res) {
        if(!err) {
            res.json("OK");
        } else {
            console.log('ERROR: ' + err);
        }
    });
};

// update one - > PUT
exports.update = async function ( req, res ){
    const id = req.params.id; // producto/id ej: producto/168468

    producto.findByIdAndUpdate(id, req.body, function(err, productos) {
        if(!err) {
            res.json(id);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};