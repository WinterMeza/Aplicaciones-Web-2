// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: EXAMEN PARCIAL 1.
// Fecha: Lunes, 30 de mayo 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const { check } = require('express-validator');
const { validateResult } = require('../helper/validacionHelper');

const validacionclave = [

    check('usuario')
    .isLength({ min: 10 }).withMessage('La clave debe tener una longitud de 10 caracteres')
    .equals(clave == repetirclave).withMessage('Las claves deben ser iguales')
    .matches(/^[A-Z]$/).withMessage('El Nombre debe empezar por una letra en mayúscula'),
    (req, res, next) => {

        validateResult(req, res, next)

    }


]