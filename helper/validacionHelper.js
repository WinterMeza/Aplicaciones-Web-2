// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: EXAMEN PARCIAL 1.
// Fecha: Lunes, 30 de mayo 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {

    try {

        validationResult(req).throw()
        return next(); //Si todo esta bien en las validaciones sigue su curso la app

    } catch (err) {

        res.status(403).send({ errors: err.array() }) //Si hay un error nos retorna el error

    }

}

module.exports = { validateResult }