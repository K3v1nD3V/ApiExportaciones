const Exportacion = require('../models/exportacion');

const getExportacion = async (req, res) => {
    const exportacion = await Exportacion.find();

    res.json(exportacion)
}

const postExportacion = async (req, res) => {
    let msg = 'Exportacion inserted';
    const body = req.body
    try{
        const exportacion = new Exportacion(body);
        exportacion.save()
    }catch(error){
        msg = error
    }

    res.json({msg:msg})
}

const putExportacion = async (req, res) => {
    let msg = 'Exportacion Updated';
    const {nameProduct, price, weight} = req.body
    try{
        await Exportacion.findOneAndUpdate({nameProduct: nameProduct}, {price: price, weight: weight}); 
    }catch(error){
        msg = error
    }

    res.json({msg:msg})
}

const deleteExportacion = async (req, res) => {
    const id = req.params.id;
    let msg = 'Exportacion deleted';
   
    try{
        await Exportacion.findByIdAndDelete({_id: id});
    }catch(error){
        msg = 'There was a problem while deleting';
    }

    res.json({msg:msg});
}

module.exports = {
    getExportacion,
    postExportacion,
    putExportacion,
    deleteExportacion
}