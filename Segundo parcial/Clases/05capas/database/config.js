// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas- Ejemplo de Docker.
// Fecha: Miércoles, 18 de mayo de 2022. Modificado  21/6/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Se exporta la librería de mongoose.
const mongoose = require('mongoose');
//Función para realizar la conexión a la base de datos.
const dbConnection = async() => {
        try { //Manejos de errore para la conexión a la base de datos.
            // Si se conecta se ejecuta el bloque de códigos que contiene try.
            await mongoose.connect(process.env.MONGODB_CNN)
            console.log(`Base de datos ejecutándose sin problema`);
        } catch (error) {
            console.log(error);
            throw new Error(`Base de datos no disponible`)
        }
    }
    // Se exporta el módulo de la conexión.
module.exports = {
    dbConnection
}