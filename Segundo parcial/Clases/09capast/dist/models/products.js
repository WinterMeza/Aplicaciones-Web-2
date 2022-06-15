"use strict";
// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Lunes, 06 de mayo de 2022. Modificado: Martes, 14 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
// Importamos mongoose y la ruta de interfaces (IProducto)
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
// Definimos los atributos de ProductoSchema
const ProductoSchema = new Schema({
    // Definimos los atributos de ProductoSchema
    nombre: {
        type: String,
        required: true,
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
});
const Producto = mongoose_1.default.model('productos', ProductoSchema);
exports.Producto = Producto;
