// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Server Side Render CRUD.
// Fecha: Miércoles 13/7/2022, MODIFICADO:Martes 19/07/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Se requiere el uso de las librerías de express y axios.
var express = require('express');
var router = express.Router();
const axios = require('axios');

const httpAxios = axios.create({
    // Ruta Padre
    baseURL: 'http://localhost:2500/v2/sextob/api/',
})

// RUTA DE CRUD.
/* GET home page. */
// Ruta para buscar un producto ya registrado.
router.get('/', function(req, res, next) {
    httpAxios.get(`productos`).then(respuesta => {
        console.log(respuesta.data.productos);
        res.render('index', { productos: respuesta.data.productos });
    })
});
// Ruta para crear un nuevo producto.
router.get('/producto/nuevo', (req, res, next) => {
        res.render('productoForm', {})
    })
    // Ruta para modificar un producto ya registrado.
router.get('/producto/modificar/:id', (req, res, next) => {
        httpAxios.get(`productos/${req.params.id}`).then(respuesta => {
            res.render('productoForm', { producto: respuesta.data })
        })
    })
    // Ruta para eliminar un producto ya registrado.
router.get('/producto/eliminar/:id', (req, res, next) => {
    httpAxios.delete(`productos/${req.params.id}`).then(respuesta => {
        res.redirect('/');
    })
})

// Se exporta el módulo de las rutas
module.exports = router;