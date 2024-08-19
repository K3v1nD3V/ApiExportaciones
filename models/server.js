const express = require('express'); 
const dbConnect = require('../database/config');
require('../database/config')
const { getExportacion, postExportacion, putExportacion, deleteExportacion } = require('../controller/exportacionController')

class Server{
    constructor(){
        this.app = express();
        this.listen();
        this.dbConnection();
        this.pathExportacion = '/api/exportacion';
        this.route();
    }

    async dbConnection() {
        await dbConnect()
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running`);  
        })
    }

    route(){
        this.app.use(express.json());

        // vehicle
        this.app.get(this.pathExportacion, getExportacion);
        this.app.post(this.pathExportacion, postExportacion);
        this.app.put(this.pathExportacion, putExportacion);
        this.app.delete(this.pathExportacion+'/:id', deleteExportacion);
    } 
}

module.exports =  Server 