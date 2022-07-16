"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 02Complementario Microservicios.
// Fecha: Domingo, 3 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Exportamos la librería de mongoose y la interfaz IUsers.
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
// Validaciones para el ingreso de los datos del usario en caso de que algún dato este vacío.
const UserSchema = new Schema({
    nombres: {
        type: String,
        require: [true, 'El nombre del usuario es obligatorio'],
    },
    apellidos: {
        type: String,
        require: [true, 'El apellido del usuario es obligatorio'],
    },
    cedula: {
        type: String,
        require: [true, 'La cédula del usuario es obligatorio'],
    },
    email: {
        type: String,
        require: [true, 'El correo del usuario es obligatorio'],
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        require: [true, 'El rol del usuario es obligatorio'],
    }
});
// Se guarda el modelo en la constante User.
const User = mongoose_1.default.model('User', UserSchema);
exports.User = User;
