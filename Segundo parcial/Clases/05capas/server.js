// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas- Ejemplo de Docker.
// Fecha: Miércoles, 18 de mayo de 2022. Modificado  21/6/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
//Exporatar librerías requeridas de express y cors.
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
// Se declara una clase para el servidor.
class Server {
    constructor() {
            // En el constructor se definen los atributos.
            this.app = express.Router();
            this.router = express.Router();
            this.port = process.env.PORT;
            this.paths = {
                    productos: '/api/productos'
                }
                // Levantar servidor.
            this.conectarDB();
            this.middlewares();
            this.routes();
            // localhost:3000/v2/sextob/api/productos
            this.router.use('/v2/sextob', this.app);
            this._express = express().use(this.router);
        }
        // Es asincrónico todos los métodos de conexión a la base de datos. MongoDB
    async conectarDB() {
            await dbConnection()
        }
        // Se utlizan las funciones de las liberías de express y cors.
    middlewares() {
            this.app.use(cors());
            this.app.use(express.json());
        }
        // Se llama las rutas.
    routes() {
            this.app.use(this.paths.productos, require('./routes/productos'))
        }
        //Se escucha el evento, en este caso muestra un mensaje en donde el
        // servidor esta funcionando mostrando el puerto que usa.
    listen() {
        this._express.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}
// Se exporta el módulo Server.
module.exports = Server;