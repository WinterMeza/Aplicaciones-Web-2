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
        descripcion: 'Productos micro'
    }
    // Ruta padre para productos.
app.get('/api/v2/productos', (req, res) => {
        respuesta.data = []
        respuesta.data.push("Coca cola", "Hot-dog", "Hamburguesas");
        console.log(`Obtener datos de productos`);
        return res.send(respuesta)
    })
    // Se exporta el módulo app.
module.exports = app;