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
        arquitectura: `Micorservicio`, //Se ubica etiqueta
        descripcion: 'Clientes micro'
    }
    // Ruta padre para clientes
app.get('/api/v2/clientes', (req, res) => {
        respuesta.data = []
        respuesta.data.push("Consumidor final", "Jhon Cevallos", "Winter Meza");
        console.log(`Obtener datos del cliente`);
        return res.send(respuesta)
    })
    // Se exporta el módulo app.
module.exports = app;