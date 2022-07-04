// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 02Complementario Microservicios.
// Fecha: Domingo, 3 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Exportamos la librería de express.
import { Router } from "express";
// Exportamos las funciones de la carpeta controladores.
import { registrar, login, obtenerUser, obtenerUserPorId, actualizaruserPorId, eliminarUserPorId } from "../controllers/UserController";

// Constante para las rutas.
const api = Router();
// Rutas para crear, modificar, leer y eliminar datos del usario. Usar en Postman.
api.post('/registrar', registrar);
api.post('/login', login);
api.get('/', obtenerUser);
api.get('/ver/:id', obtenerUserPorId);
api.put('/editar/:id', actualizaruserPorId);
api.delete('/eliminar/:id', eliminarUserPorId);
// Se exporta las rutas a través de api.
export {api}