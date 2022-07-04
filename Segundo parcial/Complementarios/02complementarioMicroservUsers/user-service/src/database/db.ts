// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 02Complementario Microservicios.
// Fecha: Domingo, 3 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Importamos la conexión a la base de datos de Mongo usando Mongoose.
import { connect } from "mongoose";
// Función para la conexión a la base de datos de MongoDB.
const dbConnection =async () => {
    
    try {
        
        const urlDB = process.env.MONGODB_CNN

        await  connect(urlDB || '')
        console.log("Base de datos conectada correctamente!");
        console.log("*******************************************");
    } catch (error) {
        console.log(error);
        // En caso de error se envia el mensaje de error.
        throw new Error(`La base de datos no esta disponble`)    
    }

}
// Se exporta la función para la conexión a la base de datos de MongoDB.
export {
    dbConnection
}