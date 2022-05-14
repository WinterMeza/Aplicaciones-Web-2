// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Tema:Complementario03 .
// Fecha: Sábado, 14 de Mayo 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SilaboSchema = Schema({

    asignatura: String,

});
//Exporta módulo de silabo.
module.exports = mongoose.model('silabo', SilaboSchema);