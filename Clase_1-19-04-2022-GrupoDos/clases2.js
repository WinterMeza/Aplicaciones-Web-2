// Modificación: Sábado 23/04/2022.
class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

class Estudiante extends Persona{
    
}

const persona = new Persona('Winter','Meza');

console.log(persona.getNombreCompleto());