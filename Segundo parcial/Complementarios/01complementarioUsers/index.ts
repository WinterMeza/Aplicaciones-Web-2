// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 01Complementario Docker.
// Fecha: Viernes, 24 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Se importa la config y el dotenv para el servidor.
import { config } from "dotenv";
import {Server} from './server';

config();
// Constructor.
const servidor = new Server();
// Se activa el servidor.
servidor.listen();
