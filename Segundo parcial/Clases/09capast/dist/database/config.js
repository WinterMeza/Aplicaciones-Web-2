// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Martes, 14 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
// Importamos la conexión mongoose para la base de datos en MongoDB.
const mongoose_1 = require("mongoose");
// Función de tipo asincrónica para la conexión a la base de datos.
const dbConnection = () => __awaiter(void 0, void 0, void 0, function*() {
    try {
        yield(0, mongoose_1.connect)(process.env["MONGODB_CNN"] || "");
        console.log(`Base de datos ejecutándose sin problema`);
    } catch (error) {
        console.log(error);
        throw new Error(`Base de datos no disponible`);
    }
});
exports.dbConnection = dbConnection;