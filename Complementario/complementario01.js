 /*                        APLICACIONES WEB 2
 Nombres y Apellidos: Winter Aníbal Meza Jiménez.
 Curso: Sexto "B" 2022(1).
 Fecha: Sábado, 24 de Abril 2022.
 Docente: Ing. John Antonio Cevallos Macias,Mg.
 Parcial : 1 2022(1).
                           PRÁCTICA COMPLEMENTARIA #1 
*/

/* 1. Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando
recursividad
*/

function tablamultiplicar(numerox) {
    for (let i = numerox; i <= 12; i++) {

        let resultado = numerox * i;
        console.log(numerox + " * " + i + " = " + resultado);
    }
}
tablamultiplicar(1);



/*2. Crear un objeto Comida que tenga como parámetros: nombre, ingredientes, 
tipo (ensalada, plato fuerte, entrada, etc.) y cualquier otro atributo que considere importante para su diseño.
*/
const comida = {
    //Definino los parámetros.
    nombre: "Ensalada Rusa.",
    ingredientes: "Zanahoria, Papa, Mayonesa, Arbeja, Cebolla, Limón y Sal.",
    tipo: "Ensalada.",
    costo: 2.50
}
const { nombre, ingredientes, tipo, costo } = comida;
//Muestra por consola en una sola línea los atributos de objeto.
console.log(`Nombre: ${nombre},Ingredientes: ${ingredientes}, Tipo: ${tipo}, Costo:${costo}`)
//Muestra por consola de una forma mas ordenada los atributos de objeto.
console.log(comida)

/*3. Definir un arreglo con sus comidas favoritas,teniendo como base el objeto del punto anterior.  */
const comidafavorita = [
    //Defino los atributos del objeto comidafavorita.
    {nombre: 'Ceviche', ingredientes: 'Pescado,Tomate, Cebolla ,Pepino, Salsa de tomate, Mostaza, Sal y Limón.', tipo: 'Plato frio', costo: 2.00 },
    {nombre: 'Hamburguesa', ingredientes: 'Pan,Tomate, Cebolla ,Pepino, Salsa de tomate, Mayonesa,Huevo, Carne molida.', tipo: 'Comida rápida', costo: 1.50 },
    {nombre: 'Caldo de pollo', ingredientes: 'Pollo, Agua, Ajo ,Fideo ,Papa ,Sal.', tipo: 'Plato fuerte', costo: 2.50 },
    {nombre: 'Tonga', ingredientes: 'Arroz, Pollo, Ajo, Maní, Maduro, Aliños y Sal.', tipo: 'Plato fuerte', costo: 3.50 },
];
const resultadocomida = [...comidafavorita];
// Muetra por consola los atributos del objeto.
console.log(resultadocomida);

/*4. Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando 4 estructuras de repetición.*/
console.log("///4 ESTRUCTURAS DE REPETICIÓN ///")
//Estructura repetitiva : While.
console.log("Estructura repetitiva : While.")
let contador1 = 0;
while (contador1<comidafavorita.length){
    console.log(comidafavorita[contador1]);
    contador1++;
}
//Estructura repetitiva : Do-While.
console.log("Estructura repetitiva : Do-While.")
let contador2 = 0;
do {
    console.log(comidafavorita[contador2]);
    contador2++;
} while (contador2 < comidafavorita.length)

//Estructura repetitiva : For.
console.log("Estructura repetitiva : For.");
for (let contador3 = 0;
    contador3 < comidafavorita.length; contador3++) {
    console.log(comidafavorita[contador3])
}
//Estructura repetitiva : ForEach.
console.log("Estructura repetitiva : ForEach.");
comidafavorita.forEach(item => console.log(item));

/*5.Crear una función flecha que reciba un arreglo de comidas y lo devuelva en mayúsculas y mejoras en su formato de presentación. */
    
    Array.prototype.toUpperCase = function() {
    return this.map(word => word.toUpperCase())
    };
    const comidas = ['Pizza', 'Carne Asada', 'Encebollado', 'Ensalada rusa', 'Tomates rellenos', 'Arroz con pollo'].toUpperCase();
    // Se recoge el arreglo usando un ciclo for.
    for (const listacomida of comidas) {
        
    console.log("COMIDA: "+listacomida);
    }