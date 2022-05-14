// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Tema:Complementario03 .
// Fecha: Sábado, 14 de Mayo 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Defino los atributos del objeto UserSchema.
const UserSchema = Schema({

    nombres: String,
    apellidos: String,
    nivel: Number,
    email: String,
    password: String,

});
// Exportar módulo user.
module.exports = mongoose.model('user', UserSchema);