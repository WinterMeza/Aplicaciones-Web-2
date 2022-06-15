// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Martes, 14 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Importamos las rutas de express, las interfaces y los modelos.
import { Request, Response } from 'express'
import { IProducto } from '../interfaces';
import { Producto } from '../models'


// Creamos funciones para obtener y crear productos.
// Función para obtener productos de manera general.
const obtenerProductos =  async (req: Request, res: Response)=>{
    const { limite= '10'  , desde='0'   } =  req.query;
    const query= { estado:true   };
    const [ total, productos ]: [ Number, IProducto[]  ]   =  await Promise.all(
        [
            Producto.countDocuments(query),
            Producto.find(query)
            .skip( Number(desde) )
            .limit(Number(limite))
        ]
    )
    
    res.json({
        total,
        productos
    })

}
// Función para obtener productos de manera individual (ID).
const obtenerProducto = async (req: Request, res: Response)=>{
    const {id} =req.params
    const producto: IProducto|null =  await Producto.findById(id);
    res.json(producto);
}

// Función para crear productos.
const crearProducto = async (req: Request,res: Response)=>{
    const {estado, ...body } =req.body as IProducto;
    const existeProducto= await Producto.findOne({nombre:body.nombre});
    if (existeProducto)
    {
        return res.status(400).json({
            message:`El producto con ese nombre ${body.nombre} ya se encuentra registrado`
        })
    }
    const producto = new Producto(body);
    const productoNuevo= await producto.save();
    return res.status(201).json(productoNuevo);

}

// Exportamos el archivo product.js
export {
    obtenerProductos,
    obtenerProducto,
    crearProducto
}
