// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Lunes, 06 de mayo de 2022. Modificado: Martes, 14 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Importamos mongoose y la ruta de interfaces (IProducto)
import mongoose from 'mongoose';
import { IProducto } from '../interfaces/';
const { Schema, model } = mongoose;

// Definimos los atributos de ProductoSchema
const ProductoSchema: mongoose.Schema = 
 new Schema<IProducto>({
    // Definimos los atributos de ProductoSchema
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    estado:{
        type:Boolean,
        default:true,
        required:true
    },
    precio:{
        type:Number,
        default:0
    },
    costo:{
        type:Number,
        default:0
    },
    minimo:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    }

})

const Producto 
= mongoose.model<IProducto>('productos', ProductoSchema);
// Exportamos el modelo.
export {Producto};
