// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Arquitectura de capas con Typescript.
// Fecha: Martes, 14 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Se importa el express y el express-validator
import { NextFunction, Request, Response } from 'express';
import  { validationResult  }  from 'express-validator';

// Función para validar los campos  y controllar el manejo de errores.
const validarCampos = (req: Request ,res: Response, next: NextFunction)=>{
    const errors= validationResult(req);

    if (!errors.isEmpty())
    {
        return res.status(400).json(errors)
    }
    next()

}

// Exportamos la función para validar campos.
export {
    validarCampos
}