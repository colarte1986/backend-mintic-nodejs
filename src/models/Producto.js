const connDB = require('../connectionDB/ConnDB'),
    Schema = connDB.Schema;

var productoSchema = new Schema({
    nombre:         { type: String },
    descripcion:    { type: String },
    stock:          { type: Number },
    precio:         { type: Number }
});

module.exports = connDB.model('producto', productoSchema);