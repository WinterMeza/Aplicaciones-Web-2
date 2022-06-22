// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas- Ejemplo de Docker.
// Fecha: Miércoles, 18 de mayo de 2022. Modificado  21/6/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Se exporta la librería de express-validator para validar el resultado.
const { validationResult } = require('express-validator');
//Definir el middleware.
//Función para validar los campos.
const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    // Condición if en caso de que no haya error.
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }
    next()

}

// Se exporta el módulo de validarCampos.
module.exports = {
    validarCampos
}