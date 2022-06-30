// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas- Ejemplo de Docker.
// Fecha: Miércoles, 18 de mayo de 2022. Modificado  21/6/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Se exportan la librería express y los modelos
const { response } = require('express');
const { Producto } = require('../models');
// Se declaran las operaciones CRUD para Praducto.
const obtenerProductos = async(req, res = response) => {
        const { limite = 10, desde = 0 } = req.query;
        const query = { estado: true };
        // Se usa promesa .
        const [total, productos] = await Promise.all(
            [
                Producto.countDocuments(query),
                Producto.find(query)
                .skip(desde)
                .limit(limite)
            ]
        )
        res.json({
            total,
            productos
        })
    }
    //Función para obtener productos de forma individual.
const obtenerProducto = async(req, res = response) => {
        const { id } = req.params
        const producto = await Producto.findById(id);
        res.json(producto);
    }
    //Función para crear productos.
const crearProducto = async(req, res) => {
        const { estado, ...body } = req.body;
        const existeProducto = await Producto.findOne({ nombre: body.nombre });
        if (existeProducto) {
            return res.status(400).json({
                message: `El producto con ese nombre ${body.nombre} ya se encuentra registrado`
            })
        }
        const producto = new Producto(body);
        const productoNuevo = await producto.save();
        // Producto nuevo tiene ya un Id de la base de datos.
        return res.status(201).json(productoNuevo);

    }
    //Función para actualizar productos.
const actualizarProducto = async(req, res = response) => {
        const { id } = req.params;
        const { estado, ...body } = req.body;
        const productoModificado =
            await Producto.findByIdAndUpdate(id, body, { new: true });
        res.json(productoModificado);
    }
    //Función para borrar productos.
const borrarProducto = async(req, res = response) => {
    const { id } = req.params;
    const productoEliminado =
        await Producto.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(productoEliminado)

}



// Se exportan las funciones (operaciones CRUD ).
module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
}