// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Tema:Complementario03 .
// Fecha: Sábado, 14 de Mayo 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Esta entidad o esquema es el resultado de la relacion de muchos a muchos entre user y silabo
const AsignacionSchema = Schema({

    idusuario: { type: Schema.ObjectId, ref: 'user' },
    idsilabo: { type: Schema.ObjectId, ref: 'silabo' },

});
//Exporta módulo de asignacion.
module.exports = mongoose.model('asignacion', AsignacionSchema);