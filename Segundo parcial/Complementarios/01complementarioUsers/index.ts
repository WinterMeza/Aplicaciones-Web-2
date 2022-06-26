// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 01Complementario Docker.
// Fecha: Domingo, 26 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// El config recoge las variables de .dev los archivos y lo pueda utilizar.
import { config } from "dotenv";
import {Server} from './server';

config();
//Intanciamos la clase Server.
const servidor = new Server();
// Listen es público.
servidor.listen();
