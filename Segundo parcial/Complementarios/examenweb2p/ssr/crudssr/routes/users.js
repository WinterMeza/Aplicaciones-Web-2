// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Server Side Render CRUD.
// Fecha: Miércoles 13/7/2022, MODIFICADO:Martes 19/07/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Se requiere el uso de la librería express y las rutas.
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
// Se exporta el módulo de las rutas.
module.exports = router;