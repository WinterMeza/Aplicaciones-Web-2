// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Grupo : #2.
// Clase: Uso de promesas.
// Fecha: Martes, 26 de Abril 2022.
// Docente: Ing. Juan Antonio Cevallos Macías, Mg.

// Declaro arreglos (objetos literal).
const platos =[
    {
        id:1,
        descripcion:'Chaulafan',
        idrestaurante:1,
    },
    {
        id:2,
        descripcion:'Arroz con CamarOn',
        idrestaurante:1,
    },
    {
        id:3,
        descripcion:'Parrillada',
        idrestaurante:2,
    },
    {
        id:4,
        descripcion:'Chuzo',
        idrestaurante:2,
    },
]
const restaurantes=[
    {
        id:1,
        nombre:'Chifa Manta'
    },
    {
        id:2,
        nombre:'La parrilla del Loco'
    },
]


// Las promesas llevan dos caminos, el reject para controlar los errores y el resolve para resolverlos.
function buscarPlatoPorId(id){
    return new Promise(( resolve, reject )=>{
        const plato  = platos.find((plato)=> { return plato.id=== id; });
        if (!plato)
        {
            const error =  new Error();
            error.message=`El plato con id ${id} no ha sido encontrado`;
            reject(error);
        }
        resolve(plato);

    })
}

// Función para buscar un restaurante por su ip.
function buscarRestaurantePorId(plato){
    return new Promise((resolve, reject)=>{
        const restaurante= restaurantes.find((restaurante)=> restaurante.id===plato.idrestaurante );
        if (!restaurante)
        {
            const error= new Error();
            error.message = `El restaurante con id ${id} no ha sido encontrado`;
            reject(error);
        }
        plato.restaurante= restaurante;
        delete plato.idrestaurante;
        resolve(plato);

    })

}
// function buscarRestaurantePorId(id){
//     return new Promise((resolve, reject)=>{
//         const restaurante= restaurantes.find((restaurante)=> restaurante.id===id );
//         if (!restaurante)
//         {
//             const error= new Error();
//             error.message = `El restaurante con id ${id} no ha sido encontrado`;
//             reject(error);
//         }
//         resolve(restaurante);

//     })

// }


//let auxiliarPlato={}; // variable auxiliar.
//  then se utiliza para el resolver y el catch para controlar los errores del reject.

buscarPlatoPorId(3)
.then((plato)=>{
    auxiliarPlato = plato;
    return buscarRestaurantePorId(plato);
    //return buscarRestaurantePorId(plato.idrestaurante);
})
.then((plato)=>{
    // auxiliarPlato.restaurante =  restaurante;
    // delete auxiliarPlato.idrestaurante;
    // console.log(auxiliarPlato)
    console.log(plato)
})
// .then(()=>{

// })
.catch((error)=>{
    console.log(error.message)
})


// buscarRestaurantePorId(3).then((restaurante)=>{
//     console.log(restaurante)
// }).catch((error)=>{
//     console.log(error.message)
// })