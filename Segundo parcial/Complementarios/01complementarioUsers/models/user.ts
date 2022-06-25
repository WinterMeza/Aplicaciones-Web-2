// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 01Complementario Docker.
// Fecha: Viernes, 24 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Se importa la librería de mongoose y la interfaz de IUser.
import mongoose, { Mongoose } from "mongoose";
import { IUser } from "../interfaces/IUser";
// Se crea el esquema para el Usuario y el modelo.
const {Schema, model} = mongoose;

// Validaciones para el usuario.
const UserSchema : mongoose.Schema = new Schema<IUser>({

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

})

const User = mongoose.model<IUser>('User', UserSchema);
// Se exporta el modelo User.
export {User}