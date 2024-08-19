const mongoose = require('mongoose'); //para testear conexion a la base de datos

const dbConnect = async () => {
    //conect to database
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Connect to database');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect //Exporta la funcion