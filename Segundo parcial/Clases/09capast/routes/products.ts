// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Martes, 14 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Se importa las librerias de express y express-validator.
import {Router} from 'express';
import { check } from 'express-validator'

// Se importa Producto de los controladores-
import { Producto } from '../controllers';

const { obtenerProducto, obtenerProductos, crearProducto } =  Producto;

// Se importa las validaciones del middlewaares.
import funciones from '../middlewares'
const { validarCampos } = funciones;

// Se crean las rutas.
const router = Router();

router.get('/',  obtenerProductos)
router.get('/:id'
, check('id','El ID de mongo no es válido').isMongoId()
, validarCampos 
, obtenerProducto);

router.post('/'
,check('nombre','Es obligatorio el nombre').not().isEmpty()
, validarCampos
, crearProducto)

// Se exportan las rutas.
export {router};