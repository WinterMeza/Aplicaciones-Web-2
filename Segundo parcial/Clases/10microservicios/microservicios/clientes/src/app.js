const express = require('express');
const app= express();

const respuesta ={
    data:[],
    arquitectura: `Micorservicio`, //Se ubica etiqueta
    descripcion: 'Clientes micro'
}

app.get('/api/v2/clientes', (req, res)=>{
    respuesta.data=[]
    respuesta.data.push("Consumidor final", "Jhon Cevallos", "Sadana Balcazar");
    console.log(`Obtener datos del cliente`);
    return res.send(respuesta)
} )

module.exports = app;