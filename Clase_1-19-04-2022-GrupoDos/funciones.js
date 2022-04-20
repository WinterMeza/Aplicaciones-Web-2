// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Grupo : #2.
// Clase : 1.
// Fecha: Martes, 19 de Abril 2022.
// Docente: Ing. John Antonio Cevallos Macias,Mg.

// Definir funciones, Sintaxis : function NombreFuncion (Parámetros).
function calcular(n1, n2, operador)
{
    switch (operador) {
        case '+':
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1*n2;
        case '/':
            return n1/n2;
        default:
            return 0;
    }
}
function saludar(nombre){
    console.log(`hola ${nombre}`)
}
// Exporta funciones.
module.exports = {
    variable: 100,
    funcion1: calcular,
    saludar
};