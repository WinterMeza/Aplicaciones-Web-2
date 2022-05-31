// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: EXAMEN PARCIAL 1.
// Fecha: Lunes, 30 de mayo 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const express = require('express'); //REQUERIMOS EXPRESS

//CONFIG PUERTO
const port = process.env.PORT || 4200;

//RUTAS
const computadora_route = require('./routes/usuario')

//INICIALIZAR EXPRESS
const app = express();

//CONFIG SERVER
app.use(express.json());

//USO DE RUTA
app.use('/api', usuario_route);

//CONFIG APP
app.listen(port, function() {
    console.log("API Rest corriendo en el puerto: " + port);
    console.log("CONEXION CORRECTA");
});