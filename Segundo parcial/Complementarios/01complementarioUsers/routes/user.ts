// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 01Complementario Docker.
// Fecha: Viernes, 24 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Se importan las rutas de la librería express.
import { Router } from "express";

// Se importan las funciones de los métodos creados en los controladores.
import { registrar, login, obtenerUser, obtenerUserPorId, actualizaruserPorId, eliminarUserPorId } from "../controllers/UserController";

// Se crean las rutas a través de la constante api.
const api = Router();

api.post('/registrar', registrar);
api.post('/login', login);
api.get('/', obtenerUser);
api.get('/ver/:id', obtenerUserPorId);
api.put('/editar/:id', actualizaruserPorId);
api.delete('/eliminar/:id', eliminarUserPorId);

// Se exporta las rutas.
export {api}