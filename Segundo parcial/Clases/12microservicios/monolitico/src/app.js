// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Ejemplo microservicios / Proxy and dockercompose.
// Fecha: Martes, 28 de junio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Requeremos de la librería express.
const express = require('express');
// Se guarda la librería en la constante app.
const app = express();


const respuesta = {
    data: [],
    arquitectura: `Monolitico`, //Se ubica etiqueta
    descripcion: 'Aquí van a estar todos los servicios'
}

//Para limpiar la data
app.use((req, res, next) => {
        respuesta.data = [];
        next();
    })
    //Se definen las rutas
app.get('/api/v1/usuarios', (req, res) => {
    respuesta.data.push("Administrador", "Invitado", "Gerente");
    return res.send(respuesta)
})
app.get('/api/v1/productos', (req, res) => {
    respuesta.data.push("Coca cola", "Hot-dog", "Hamburguesas");
    return res.send(respuesta)
})
app.get('/api/v1/clientes', (req, res) => {
        respuesta.data.push("Consumidor final", "Jhon Cevallos", "Sadana Balcazar");
        return res.send(respuesta)
    })
    // Se exporta el módulo app.
module.exports = app;