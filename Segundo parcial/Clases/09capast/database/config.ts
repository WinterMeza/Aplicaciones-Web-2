// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Martes, 14 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Importamos la conexión mongoose para la base de datos en MongoDB.
import { connect }  from 'mongoose';

// Función de tipo asincrónica para la conexión a la base de datos.
const dbConnection = async () =>{
    try {
        
        await  connect(process.env["MONGODB_CNN"] || "")
        console.log(`Base de datos ejecutándose sin problema`);
    } catch (error) {
        console.log(error);
        throw new Error(`Base de datos no disponible`)        
    }
}
// Exportamos el archivo de conexión a la base datos.
export  {
    dbConnection
}