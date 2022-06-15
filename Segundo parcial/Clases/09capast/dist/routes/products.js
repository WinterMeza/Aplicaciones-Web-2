// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Martes, 14 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// Se importa las librerias de express y express-validator.
const express_1 = require("express");
const express_validator_1 = require("express-validator");
// Se importa Producto de los controladores-
const controllers_1 = require("../controllers");
const { obtenerProducto, obtenerProductos, crearProducto } = controllers_1.Producto;
// Se importa las validaciones del middlewaares.
const middlewares_1 = __importDefault(require("../middlewares"));
const { validarCampos } = middlewares_1.default;
// Se crean las rutas.
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', obtenerProductos);
router.get('/:id', (0, express_validator_1.check)('id', 'El ID de mongo no es válido').isMongoId(), validarCampos, obtenerProducto);
router.post('/', (0, express_validator_1.check)('nombre', 'Es obligatorio el nombre').not().isEmpty(), validarCampos, crearProducto);