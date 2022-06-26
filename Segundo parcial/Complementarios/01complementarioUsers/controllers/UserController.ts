// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 01Complementario Docker.
// Fecha: Domingo, 26 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Importamos las librerias de express y bcryp
import {Request, Response} from 'express'
import bcrypt from 'bcrypt-nodejs'

// Importamos Iuser, User y createToken de sus respectivas rutas.
import { IUser } from '../interfaces/IUser'
import { User } from '../models/user'
import {createToken} from '../helpers/jwt'

// Se crea una función para registrar el usuario.
function registrar(req : Request, res : Response) {

    const params = req.body; //Me manda el body del request

    const user = new User(); //Se instancia el modelo

    if (params.password) {

        bcrypt.hash(params.password, null!, null, function(err, hash) {
            if (hash) {
                user.password = hash;
                user.nombres = params.nombres;
                user.apellidos = params.apellidos;
                user.cedula = params.cedula;
                user.email = params.email;
                user.role = params.role;

                user.save((err, user_save) => {
                    if (err) {
                        res.status(500).send({ error: 'No se ingresó el usuario' })
                    } else {
                        res.status(200).send({ user: user_save }) //Manda todos los datos registrados
                    }
                })
            }
        })

    } else {

        res.status(403).send({ error: 'No se ingresó una contraseña' })

    }

}

// Función para logear al usuario registrado.
const login = async (req : Request, res : Response) => {

    const data = req.body;

    //Buscamos el usuario por email
    await User.findOne({ cedula: data.cedula }, (err : Error, user_data: { password: string }) => {

        if (err) {

            res.status(500).send({ message: 'Error en el servidor' })

        } else {
            if (user_data) {

                bcrypt.compare(data.password, user_data.password, function(err, check) {
                    if (check) {

                        if (data.gettoken) {
                            res.status(200).send({
                                jwt: createToken(user_data),
                                user: user_data,
                            });
                        } else {
                            res.status(200).send({
                                user: user_data,
                                message: 'no token',
                                jwt: createToken(user_data),
                            });
                        }

                    } else {
                        res.status(403).send({ message: 'Las credenciales de ingreso no coinciden' })
                    }
                });

            } else {
                res.status(403).send({ message: 'La identificación no existe' })
            }
        }

    }).clone().catch(function(err){ console.log(err)})

}

// Función para obtener los datos del usario de manera general y buscarlos una vez registrado.
const obtenerUser = async (req : Request, res : Response) => {

    try {

        const user = await User.find();
        res.status(200).send(user);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un problema')
    }

}

// Función para obtener los datos del usario de manera individual (Por ID) y buscarlos una vez registrado.
const  obtenerUserPorId = async (req : Request, res : Response) => {

    try {

        const id = req.params['id']

        await User.findById(id, (err : Error, user_data : any) => {

            if (user_data) {

                res.status(200).send(user_data)
            } else {

                res.status(400).send({ message: 'No existe el usuario' })

            }

        }).clone().catch(function(err){ console.log(err)})


    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un problema')
    }

}

// Función para actualizar los datos del usario de forma individual (Por ID).
const actualizaruserPorId = async (req : Request, res : Response) => {

    try {

        const id = req.params['id'];
        const data = req.body;

        await User.findByIdAndUpdate(id, data, (err : Error, user_data : any) => {

            if (user_data) {

                res.status(200).send({ message: 'Usuario actualizado', data_act: user_data })
            } else {

                res.status(400).send({ message: 'No existe el usuario' })

            }

        }).clone().catch(function(err){ console.log(err)})


    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un problema')
    }

}

//// Función para eliminar los datos del usario de forma individual (Por ID).
const eliminarUserPorId = async (req : Request, res : Response) =>  {

    try {

        const id = req.params['id'];
        const UsuarioEliminado = await User.findByIdAndDelete(id, { new: true });
        res.status(200).send({ message: 'Usuario eliminado con éxito', data: UsuarioEliminado })


    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un problema')
    }

}

//Exportamos las funciones creadas.
export {

    registrar,
    login,
    obtenerUser,
    obtenerUserPorId,
    actualizaruserPorId,
    eliminarUserPorId

}