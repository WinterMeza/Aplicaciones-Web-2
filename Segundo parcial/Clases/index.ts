// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Lunes, 06 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
import express,{Request,Response} from 'express';

const app = express()


app.get('/', (req: Request , res: Response)=>{
    res.json({
        msg: 'ok'
    }) 
})

app.listen(2500, ()=>{
    console.log('Puerto corriendo en 2500')
})