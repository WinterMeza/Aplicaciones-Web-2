// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas.
// Fecha: Lunes, 16 de mayo de 2022. Modificado: Miércoles, 18/5/22.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Se crea el modelo y esquema del produto y se extrae mongoose.
const { Schema, model } = require('mongoose');
// Se crea el esquema.
const ProductoSchema = Schema({
        // Se declaran los objetos y atributos del producto.
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
    // Se exporta el módulo del modelo.
module.exports = model('Producto', ProductoSchema);
