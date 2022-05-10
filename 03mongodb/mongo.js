// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Grupo : #2.
// Clase: Conexión a MongoDB Atlas.
// Fecha: Lunes, 09 de Mayo 2022 | Fecha Modificado:Martes, 10/05/2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

const mongoose = require("mongoose");
// Credenciales para la conexión a MongoDB Atlas.
const conexion = "mongodb+srv://winterfacci:winter123@cluster0.jhnm0.mongodb.net/mongoosedb?retryWrites=true&w=majority";
(async() => {
    //conectamos a la bd
    const conectado = await mongoose.connect(conexion);
    //Definir los models
    const Grupo = mongoose.model("Grupo", {
        nombre: String,
        // usuarios:[{ type: mongoose.Schema.Types.ObjectId, ref:"Usuario" }]
    });
    const Permiso = mongoose.model("Permiso", { nombre: String });
    const Usuario = mongoose.model("Usuario", {
        nombre: String,
        idgrupo: { type: mongoose.Schema.Types.ObjectId, ref: "Grupo" },
        //   permisos:[{type: mongoose.Schema.Types.ObjectId, ref:"Permiso" }],
        permisos: [{
            permiso: { type: mongoose.Schema.Types.ObjectId, ref: "Permiso" },
            estado: { type: Boolean }

        }],

    });
    //Instancias de los modelos
    const grupo1 = new Grupo({ nombre: "Administradores" });
    const permiso1 = new Permiso({ nombre: "Guardar" });
    const permiso2 = new Permiso({ nombre: "Eliminar" });
    //Almacenar grupo y permisos
    const grupoAlmacenado = await grupo1.save();
    const permiso1Almacenado = await permiso1.save();
    const permiso2Almacenado = await permiso2.save();

    //instancia de Usuario
    const usuario1 = new Usuario({
            nombre: "Administrador",
            idgrupo: grupoAlmacenado._id,
            permisos: [
                { permiso: permiso1Almacenado._id, estado: true },
                { permiso: permiso2Almacenado._id, estado: true }
            ]
        })
        //proocedemos almacenar usuario
    const usuarioAlmacenado = await usuario1.save();
    //  console.log(usuarioAlmacenado)
    //consultar la información de usuarios
    const resultado = await Usuario.find()
        .populate("idgrupo")
        .populate("permisos.permiso");
    //mostrar datos de usuario específico
    console.log(resultado[0].permisos)

})()
