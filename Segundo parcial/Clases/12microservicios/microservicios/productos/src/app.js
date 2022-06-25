const express = require('express');
const app= express();

const respuesta ={
    data:[],
    arquitectura: `Micorservicio`, //Se ubica etiqueta
    descripcion: 'Productos micro'
}

app.get('/api/v2/productos', (req, res)=>{
    respuesta.data=[]
    respuesta.data.push("Coca cola", "Hot-dog", "Hamburguesas");
    console.log(`Obtener datos de productos`);
    return res.send(respuesta)
} )

module.exports = app;