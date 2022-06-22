// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas- Ejemplo de Docker.
// Fecha: Miércoles, 18 de mayo de 2022. Modificado  21/6/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Se exportan las librerías que vamos a usar para las validaciones 
//en este caso express para las rutas  para las rutas y express-validator para el check.
const { Router } = require('express'); //  
const { check } = require('express-validator');
// Se agregan los controladores.
const {
    crearProducto,
    actualizarProducto,
    borrarProducto,
    obtenerProducto,
    obtenerProductos
} = require('../controllers').Producto;
const { validarCampos } = require('../middlewares');
const router = Router();
//Validar que el Id exista en Mongo.
router.get('/', obtenerProductos);
router.get('/:id', check('id', 'El id no es válidio').isMongoId(), validarCampos, obtenerProducto);
//Validar que no este vacío.
router.post('/', check('nombre', 'El nombre es requerido').not().isEmpty(), validarCampos, crearProducto);
router.put('/:id', check('id', 'No es un ID válido').isMongoId(), validarCampos, actualizarProducto);
router.delete('/:id',
    check('id', 'No es un id válido').isMongoId(), validarCampos, borrarProducto);
// Se exporta el módulo de las rutas (routes).
module.exports = router;