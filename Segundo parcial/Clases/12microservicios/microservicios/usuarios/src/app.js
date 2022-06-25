const express = require('express');
const app= express();

const respuesta ={
    data:[],
    arquitectura: `Micorservicio`, //Se ubica etiqueta
    descripcion: 'Usuarios micro'
}

app.get('/api/v2/usuarios', (req, res)=>{
    respuesta.data=[]
    respuesta.data.push("Administrador", "Invitado", "Gerente");
    console.log(`Obtener datos del cliente`);
    return res.send(respuesta)
} )

module.exports = app;