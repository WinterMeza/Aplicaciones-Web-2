// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Lunes, 06 de mayo de 2022. Modificado : Miércoles, 14 de Junio.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// El config recoge las variables de .dev los archivos y lo pueda utilizar.
import { config } from 'dotenv'
config();
import { Server } from './server'
//Intanciamos la clase Server.
const server = new Server();
// Listen es público.
server.listen()

