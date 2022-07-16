"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 02Complementario Microservicios.
// Fecha: Domingo, 3 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Exportamos la librería de dotenv y el servidor.
const dotenv_1 = require("dotenv");
const server_1 = require("./server");
// El config recoge las variables de .dev los archivos y lo pueda utilizar.
(0, dotenv_1.config)();
//Intanciamos la clase Server.
const servidor = new server_1.Server();
// Listen es público.
servidor.listen();
