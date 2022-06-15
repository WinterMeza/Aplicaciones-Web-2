
// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Lunes, 06 de mayo de 2022. Modificado : Miércoles, 14 de Junio.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Importamos el servicio express, las rutas y la conexión de la base de datos.
import express, { Router, Express } from "express";
import cors from 'cors';

import { router as products } from './routes/products'
import { dbConnection } from "./database/config";


// Defino la clase servidor que tiene las funciones de listen como middleware o rutas.
class Server {
    app: Router;
    router: Router;
    port:Number;
    paths: { [ key:string ]:string };
    // Se aplica modificadores de acceso de tipo para _expresss, conectarDB,los midddleware y las rutas.
    private _express: Express;
    constructor(){
        this.app = Router();
        this.router = Router();
        this.port= Number(process.env["PORT"]);
        this.paths = {
            productos: '/api/productos',
        }
        this.conectarDB();
        this.middleware();
        this.routes();
        // Ruta Padre.
        this.router.use('/v2/sextob', this.app);
        this._express = express().use(this.router);
    }
    private async conectarDB(){
        await dbConnection()
    }
    private middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.productos , products )
    }
   // Se aplica modificador de acceso de tipo público para el método de listen ya que permite que 
   // el usuario conozca en que puerto está corriendo el servidor.
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en http://localhost:${this.port}/v2/sextob/api/productos`);
            
        })
    }
}
// Exportamos Server.
export {Server}