// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 01Complementario Docker.
// Fecha: Viernes, 24 de mayo de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Importamos las liberias de jwt-simple y moment para el uso del token.
import jwt from 'jwt-simple'
import moment from'moment'

//Llave del token
const secret = 'WinterMezaJimenez';

//Generación de tokens por usuario
const createToken = function(user : any) {

    const payload = {

        sub: user._id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        cedula: user.cedula,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()

    }

    return jwt.encode(payload, secret);

}

export {createToken}