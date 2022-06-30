// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas- Ejemplo de Docker.
// Fecha: Miércoles, 18 de mayo de 2022. Modificado  21/6/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Archivo de barril.
// Se extrae el middleware de validarDatos.
const validarCampos = require('../middlewares/validarCampos')

// Se exporta el módulo de validarDatos.
module.exports = {
    ...validarCampos
}