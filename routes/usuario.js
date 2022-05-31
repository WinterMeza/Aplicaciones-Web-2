// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: EXAMEN PARCIAL 1.
// Fecha: Lunes, 30 de mayo 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const express = require('express');
const { validarUsuario } = require('../middleware/validarUsuario');

//TRAEMOS EL ENRUTAMIENTO DE EXPRESS
const api = express.Router();

//CREAMOS RUTA PARA EL POST
api.post('/registrar', validarUsuario, (req, res) => {

    const body = req.body;
    if (clave.filter((c) => usario.repetirclave === body.repetirclave)) {
        message: 'Claves iguales'
    }
    return res.status(200).send({

        data: body, //NOS ENVIA LO QUE INGRESAMOS EN EL BODY
        message: 'Dato almacenado correctamente' //NOS ENVIA UN MENSAJE DE CONFIRMACION

    })

});





module.exports = api;