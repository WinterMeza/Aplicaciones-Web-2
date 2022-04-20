// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Grupo : #2.
// Clase : 1.
// Fecha: Martes, 19 de Abril 2022.
// Docente: Ing. John Antonio Cevallos Macias,Mg.
const persona = 
{
    nombre:"Winter",
    apellido:"Meza",
    esEstudiante:false,
    geolocalizacion:{
        lat:123.232,
        lng:23.234234,
    },
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

function mostrarDatos({ nombre, apellido, geolocalizacion:{ lat,lng } })
{
    console.log(nombre)
    console.log(apellido)
    console.log(lat)
    console.log(lng)
}
    
mostrarDatos(persona)
