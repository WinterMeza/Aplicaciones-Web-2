// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Grupo : #2.
// Clase: Callback.
// Fecha: Lunes,25 de Abril 2022.
// Docente: Ing. Juan Antonio Cevallos Macías, Mg.
// Declarar arreglos
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
// Función de callback para buscar un plato por un determinado id.
function buscarPlatoPorId(id, callback)
{
    const plato=  platos.find((plato)=>  plato.id === id ); // true === "true"
    // condición en caso de que no se encuentre un plato, se crea un mensaje de error.
    if (!plato)
    {
        // Se crea un error.
        const error =  new Error();
        error.message=` El plato con id ${id} no pudo ser encontrado`;
        return callback(error);
    }
    
    return callback(null, plato);
}
function buscarRestaurantePorId(id, callback)
{
    const restaurante = restaurantes.find((restaurante)=> restaurante.id=== id );
    if (!restaurante)
    {
        const error= new Error();
        error.message=`El restaurante con id ${id} no existe`;
        return callback(error);
    }
    return callback(null, restaurante);
}

buscarPlatoPorId(2,  (err, plato)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    
    buscarRestaurantePorId(plato.idrestaurante, (err, restaurante)=>{
        if (err)
        {
            console.log(err.message);
            return;
        }
        plato.restaurante = restaurante;
        delete plato.idrestaurante;
        console.log(plato)


        // plato.restaurante= restaurante;
        // delete plato.idrestaurante;
        // console.log(plato)

        // buscarCiudadPorId(restaurante.id, (err, ciudad)=>{
        //     if (err)
        //     {
        //         console.log(err.message);
        //         return;
        //     }
        //     console.log(ciudad)
        // })
    })
}
)

