 /*                        APLICACIONES WEB 2
            Nombres y Apellidos: Winter Aníbal Meza Jiménez.
            Curso: Sexto "B" 2022(1).
            Fecha: Viernes, 06 de Mayo 2022.
            Docente: Ing. John Antonio Cevallos Macias,Mg.
            Parcial : 1 2022(1).
                                  PRÁCTICA COMPLEMENTARIA #2
           */
 //Se crean los objetos.
 const usuarios = [{
         id: 1,
         nombre: 'Paul',
         apellido: 'Quiñonez',
         nivel: 6,
         idSilabo: 1
     },

     {
         id: 2,
         nombre: 'Steven',
         apellido: 'Parrales',
         nivel: 5,
         idSilabo: 3

     },

     {
         id: 3,
         nombre: 'Winter',
         apellido: 'Meza',
         nivel: 6,
         idSilabo: 2

     },

     {
         id: 4,
         nombre: 'Jean',
         apellido: 'Pin',
         nivel: 5,
         idSilabo: 4

     }
 ]

 const silabos = [{
         id: 1,
         asigantura: 'Aplicaciones Web II',
         descripcion: 'Silabo orientado a aplicaciones web II',
         idTema: 1
     },

     {
         id: 2,
         asigantura: 'Modelamiento y Simulación',
         descripcion: 'Silabo orientado a modelamiento y simulación',
         idTema: 2
     },

     {
         id: 3,
         asigantura: 'Gestión de Base de Datos',
         descripcion: 'Silabo orientado a gestión de base de datos',
         idTema: 3
     },

     {
         id: 4,
         asigantura: 'Aplicaciones Web I',
         descripcion: 'Silabo orientado a aplicaciones web I',
         idTema: 4
     }
 ]

 const unidades = [

     {
         id: 1,
         tema1: 'Fundamentos Lenguajes de Back-end',
         tema2: 'Arquitectura y Servicios',
         tema3: 'Infraestructura e implementación de microservicios',
         tema4: 'Integración del Front-End'
     },

     {
         id: 2,
         tema1: 'Hola',
         tema2: 'Adios',
         tema3: 'Me',
         tema4: 'Retire'
     },

     {
         id: 3,
         tema1: 'Base',
         tema2: 'De',
         tema3: 'Datos',
         tema4: 'II'
     },

     {
         id: 4,
         tema1: 'Aplicaciones',
         tema2: 'Web',
         tema3: 'I',
         tema4: 'XD'
     }

 ]

 module.exports = {
     usuarios,
     silabos,
     unidades
 };