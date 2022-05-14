// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Tema:Complementario03 .
// Fecha: Sábado, 14 de Mayo 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnidadSchema = Schema({

    tema: String,
    idsilabo: { type: Schema.ObjectId, ref: 'silabo' }, //Relacion de uno a muchos entre silabo y unidad

});

module.exports = mongoose.model('unidad', UnidadSchema);