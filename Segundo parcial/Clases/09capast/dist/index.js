// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Lunes, 06 de mayo de 2022. Modificado : Miércoles, 14 de Junio.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// El config recoge las variables de .dev los archivos y lo pueda utilizar.
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server_1 = require("./server");
//Intanciamos la clase Server.
const server = new server_1.Server();
// Listen es público.
server.listen();