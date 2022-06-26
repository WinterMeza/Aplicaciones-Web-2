// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 01Complementario Docker.
// Fecha: Domingo, 26 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Importamos la librería de mongoose para conectar a la base de datos de MongoDB.
import { connect } from "mongoose";

// Función para conectar a la base de datos MongoDB.
const dbConnection =async () => {
    
    try {
        
        const urlDB = process.env.MONGODB_CNN

        await  connect(urlDB || '')
        console.log("Base de datos conectada correctamente!");
        console.log("*******************************************");
    } catch (error) {
        console.log(error);
        throw new Error(`La base de datos no esta disponble`)    
    }

}
// Exportamos la función para la conexión de la base datos.
export {
    dbConnection
}