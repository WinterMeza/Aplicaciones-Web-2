// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas.
// Fecha: Martes, 17 de mayo de 2022.Modificado: Sábado/5/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
//Archivo de barril.
// Se extrae la libreria dotenv y el archivo config.js de la base de datos.
require('dotenv').config()
    // Bloque de código que llama al servidor.
const Server = require('./server');
const server = new Server();
server.listen();
