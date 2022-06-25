// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 01Complementario Docker.
// Fecha: Viernes, 24 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Se importa las liberías de express y cors.
import express, {Router, Express} from "express";
import cors from 'cors';

// Se importa las rutas y la función para la conexión a la base de datos.
import { api as user } from "./routes/user";
import { dbConnection } from "./database/db";

// Se crea la clase Server para levantar el servidor y el puerto de salida.
class Server{

    app : Router;
    router : Router;
    port : Number;
    paths : {[pass : string] : string};
 // Se utiliza los modificadores de acceso para no mostrar datos innesesarión al usuario.
    private _express : Express;

    constructor(){

        this.app = Router();
        this.router = Router();
        this.port = Number(process.env["PORT"])

        this.paths = {
            // Ruta padre
            users : '/api/users'
        }

        this.conexionDB();
        this.middleware();
        this.routes();
        this.router.use('/TecnoService', this.app);
        this._express = express().use(this.router);

    }

    private async conexionDB(){

        await dbConnection();

    }

    private middleware(){
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true })); // Nos servirá en los formulario.
        this.app.use(express.json());
    }

    private routes(){
        this.app.use(this.paths.users, user)
    }

    listen(){
        this._express.listen(this.port, () => {
            // Puerto de conexión.
            console.log(`Servidor corriendo en http://localhost:${this.port}/TecnoService/api/users `);
            console.log("CONEXIÓN CORRECTA");
            console.log("*******************************************");           
            
        })
    }

}
// Se exporta la función.
export {Server}
