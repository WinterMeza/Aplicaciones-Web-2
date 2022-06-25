const express = require('express');
const  app = express();


const respuesta ={
    data:[],
    arquitectura: `Monolitico`, //Se ubica etiqueta
    descripcion: 'Aquí van a estar todos los servicios'
}

//Para limpiar la data
app.use((req, res, next)=>{
    respuesta.data=[];
    next();
})
//Se definen las rutas
app.get('/api/v1/usuarios', (req, res)=>{
    respuesta.data.push("Administrador", "Invitado", "Gerente");
    return res.send(respuesta)
})
app.get('/api/v1/productos', (req, res)=>{
    respuesta.data.push("Coca cola", "Hot-dog", "Hamburguesas");
    return res.send(respuesta)
})
app.get('/api/v1/clientes', (req, res)=>{
    respuesta.data.push("Consumidor final", "Jhon Cevallos", "Sadana Balcazar");
    return res.send(respuesta)
})

module.exports = app;