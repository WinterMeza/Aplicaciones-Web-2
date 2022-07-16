"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 02Complementario Microservicios.
// Fecha: Domingo, 3 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Importamos la conexión a la base de datos de Mongo usando Mongoose.
const mongoose_1 = require("mongoose");
// Función para la conexión a la base de datos de MongoDB.
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const urlDB = process.env.MONGODB_CNN;
        yield (0, mongoose_1.connect)(urlDB || '');
        console.log("Base de datos conectada correctamente!");
        console.log("*******************************************");
    }
    catch (error) {
        console.log(error);
        // En caso de error se envia el mensaje de error.
        throw new Error(`La base de datos no esta disponble`);
    }
});
exports.dbConnection = dbConnection;
