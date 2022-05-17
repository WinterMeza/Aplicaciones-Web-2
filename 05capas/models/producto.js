// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas.
// Fecha: Lunes, 16 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    precio: {
        type: Number,
        default: 0
    },
    costo: {
        type: Number,
        default: 0
    },
    minimo: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    }
})

module.exports = model('Producto', ProductoSchema);