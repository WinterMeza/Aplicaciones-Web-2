"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 02Complementario Microservicios.
// Fecha: Domingo, 3 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Exportamos la librería de express.
const express_1 = require("express");
// Exportamos las funciones de la carpeta controladores.
const UserController_1 = require("../controllers/UserController");
// Constante para las rutas.
const api = (0, express_1.Router)();
exports.api = api;
// Rutas para crear, modificar, leer y eliminar datos del usario. Usar en Postman.
api.post('/registrar', UserController_1.registrar);
api.post('/login', UserController_1.login);
api.get('/', UserController_1.obtenerUser);
api.get('/ver/:id', UserController_1.obtenerUserPorId);
api.put('/editar/:id', UserController_1.actualizaruserPorId);
api.delete('/eliminar/:id', UserController_1.eliminarUserPorId);
