const connDB = require('../connectionDB/ConnDB'),
    Schema = connDB.Schema;

var clienteSchema = new Schema({
    cedula:     { type: String },
    nombre:     { type: String },
    direccion:  { type: String },
    telefono:   { type: String },
    email:      { type: String }
});

module.exports = connDB.model('cliente', clienteSchema);