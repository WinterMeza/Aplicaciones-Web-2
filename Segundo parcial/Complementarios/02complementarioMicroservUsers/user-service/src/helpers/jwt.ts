// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 02Complementario Microservicios.
// Fecha: Domingo, 3 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Importamos las librerias jwt-simple y moment .
import jwt from 'jwt-simple'
import moment from'moment'

//Llave del token
const secret = 'WinterMezaJimenez';

//Generación de tokens por usuario.
const createToken = function(user : any) {

    const payload = {
       // Instanciamos los atributos para el token.
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
// Exportamos la función para la generación del Token para el usuario.
export {createToken}