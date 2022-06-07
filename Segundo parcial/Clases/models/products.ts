// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Lunes, 06 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
import mongoose from 'mongoose';
import {IProducto} from "../interfaces/IProducts";
const {Schema, model }= mongoose;
 
const ProductoSchema: mongoose.Schema = new Schema<IProducto>({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    estado:{
        type: Boolean,
        required: true,
        unique: true
    },
    precio:{
        type: Number,
        required: true,
        unique: true
    },
    costo:{
        type: Number,
        required: true,
        unique: true
    },
    minimo:{
        type: Number,
        required: true,
        unique: true
    },
    stock:{
        type: Number,
        required: true,
        unique: true
    }

})

const Producto = mongoose.model<IProducto>('Producto', ProductoSchema);

export = {Producto}