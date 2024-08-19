const {model, Schema} = require('mongoose');

const exportacionSchema = new Schema({ //creamos esquema del documento Mongo
    nameProduct: {
        type: String, //tipo de dato
        required: [true, 'The name is required'], //requerido
    },
    price: {
        type: Number, //tipo de dato
        required: [true, 'The price is required'], //requerido
    },
    weight: {
        type: Number, //tipo de dato
        required: [true, 'The weight is required'], //requerido
    }
});

module.exports = model('Exportacion', exportacionSchema, 'exportacion'); 