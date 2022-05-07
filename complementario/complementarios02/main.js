/*                        APLICACIONES WEB 2
 Nombres y Apellidos: Winter Aníbal Meza Jiménez.
 Curso: Sexto "B" 2022(1).
 Fecha: Viernes, 06 de Mayo 2022.
 Docente: Ing. John Antonio Cevallos Macias,Mg.
 Parcial : 1 2022(1).
                           PRÁCTICA COMPLEMENTARIA #2
*/

const datos = require('./datos'); //Importamos los arreglos creados en el archivo datos.js

function buscarUsuarioPorId(id) { //Esta funcion permitirá buscar a un usuario atraves de ID asignado

    //retornara una promesa la cual recibe un resolve, este se ejecutará en caso de que no haya error y se encuentre el usuario.
    //por otro lado tambien recibe un reject el cual se ejecutara cuando no se encuentre el usuario, esto será controlado por una condicion
    return new Promise((resolve, reject) => {
        const usuario = datos.usuarios.find((usuario) => {
            return usuario.id === id
        })

        if (!usuario) //Esta condicion controla si se encuentra el usuario o no
        {

            const error = new Error();
            error.message = `El usuario con el id ${id} no ha sido encontrado en la base de datos` //Este error se mostrara en consola si no hay el usuario
            reject(error);

        }

        resolve(usuario); //Si se encuentra el usuario nos mostrará el usuario con sus atributos

    })

}

function buscarSilaboPorId(id) { //Esta funcion permitirá buscar a un silabo atraves de ID asignado

    //retornara una promesa la cual recibe un resolve, este se ejecutará en caso de que no haya error y se encuentre el silabo.
    //por otro lado tambien recibe un reject el cual se ejecutara cuando no se encuentre el silabo, esto será controlado por una condicion

    return new Promise((resolve, reject) => {
        const silabo = datos.silabos.find((silabo) => {
            return silabo.id === id
        })

        if (!silabo) //Esta condicion controla si se encuentra el usuario o no
        {

            const error = new Error();
            error.message = `El silabo con el id ${id} no ha sido encontrado en la base de datos` //Este error se mostrara en consola si no hay el usuario
            reject(error);

        }

        resolve(silabo); //Si se encuentra el usuario nos mostrará el usuario con sus atributos

    })

}

function buscarTemasPorId(id) { //Esta funcion permitirá buscar a un tema atraves de ID asignado

    //retornara una promesa la cual recibe un resolve, este se ejecutará en caso de que no haya error y se encuentre el tema.
    //por otro lado tambien recibe un reject el cual se ejecutara cuando no se encuentre el tema, esto será controlado por una condicion

    return new Promise((resolve, reject) => {
        const tema = datos.unidades.find((tema) => {
            return tema.id === id
        })

        if (!tema) //Esta condicion controla si se encuentra el tema o no
        {

            const error = new Error();
            error.message = `El tema con el id ${id} no ha sido encontrado en la base de datos.` //Este error se mostrara en consola si no hay el tema
            reject(error);

        }

        resolve(tema); //Si se encuentra el usuario nos mostrará el tema con sus atributos

    })

}
//Ejecutamos la funcion creada anteriormente para buscar un usuario, en esta le pasamos un atributo el cual es el ID, y recibimos el usuario en caso de que
//la promesa en la funcion buscarUsuarioPorId se cumpla, una vez recibido el usuario lo mostramos atraves de la consola
buscarUsuarioPorId(3).then((usuario) => {
        console.log(usuario);
        //El then tambien retornara una promesa en este caso la de buscar silabo por ID que esta en la funcion buscarSilaboPorId que envia el usuario consultado pero atraves
        //de este accedemos a los silabos con su id.
        return buscarSilaboPorId(usuario.idSilabo);
    })
    //Lo anterior nos devuelve una promesa que la mostramos atraves de silabo y con el console log la mostramos en la consola.
    .then((silabo) => {
        console.log(silabo);
        //El then tambien retornara una promesa en este caso la de buscar tema por ID que esta en la funcion buscartemaPorId que envia el usuario consultado pero atraves
        //de este accedemos a los temas con su id.
        return buscarTemasPorId(silabo.idTema);
    })
    //Lo anterior nos devuelve una promesa que la mostramos atraves de tema y con el console log la mostramos en la consola.
    .then((tema) => {
        console.log(tema);
    })
    //En caso que ninguna de las promesas no se cumpla simplemente mostramos el error atraves de un catch
    .catch((error) => {
        console.log(error.message);
    })