 // APLICACIONES WEB 2
 // Nombres y Apellidos: Winter Aníbal Meza Jiménez.
 // Curso: Sexto "B" 2022(1).
 // Clase: Server Side Render CRUD.
 // Fecha: Martes 19/07/2022.
 // Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
 // Se requiere el uso de las librerías de express y axios.
 var express = require('express');
 var router = express.Router();

 const axios = require('axios');

 const httpAxios = axios.create({
     //Ruta padre.
     baseURL: 'http://localhost:2500/v2/sextob/api/'
 })


 router.post('/producto/operar', (req, res, next) => {

         console.log(req.body)
         if (req.body._id === "") {
             //Envia productos.
             httpAxios.post(`productos`, {
                 //Atributos del objeto producto.
                 nombre: req.body.nombre,
                 precio: req.body.precio,
                 costo: req.body.costo,
                 minimo: req.body.minimo,
                 stock: req.body.stock
             }).then(respuesta => {
                 res.redirect('/')
             })
         } else { // Actualiza productos.
             httpAxios.put(`productos/${req.body._id}`, {
                 nombre: req.body.nombre,
                 precio: req.body.precio,
                 costo: req.body.costo,
                 minimo: req.body.minimo,
                 stock: req.body.stock,
             }).then(respuesta => {
                 res.redirect('/')
             })

         }

     })
     // Se exporta el módulo de rutas.
 module.exports = router;