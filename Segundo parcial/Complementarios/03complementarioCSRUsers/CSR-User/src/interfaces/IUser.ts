// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 03Complementario CSR.
// Fecha: Viernes, 15 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Exportamos las interfaz.
export interface IResUser {

    users: User[];

}
// Exportamos las interfaz User con sus respectivos atributos definidos del usuario.
export interface User{

    _id?:string,
    password:string,
    nombres:string,
    apellidos:string,
    cedula:string,
    email:string,
    role:string

}