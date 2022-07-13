// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Server Side Render CRUD.
// Fecha: Miércoles 13/7/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Se requiere el uso de las librerías de express y axios.
var express = require('express');
var router = express.Router();
const axios = require('axios');

const httpAxios = axios.create({
    // Ruta Padre
    baseURL: 'http://localhost:2500/v2/sextob/api/',
})


/* GET home page. */
router.get('/', function(req, res, next) {
    httpAxios.get(`productos`).then(respuesta => {
        console.log(respuesta.data.productos);
        res.render('index', { productos: respuesta.data.productos });
    })
});
// Se exporta el módulo de las rutas
module.exports = router;