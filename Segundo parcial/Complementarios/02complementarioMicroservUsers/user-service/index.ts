// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 02Complementario Microservicios.
// Fecha: Domingo, 3 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Exportamos la librería de dotenv y el servidor.
import { config } from "dotenv";
import {Server} from './server';
// El config recoge las variables de .dev los archivos y lo pueda utilizar.
config();
//Intanciamos la clase Server.
const servidor = new Server();
// Listen es público.
servidor.listen();
