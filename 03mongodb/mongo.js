// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Grupo : #2.
// Clase: Conexión a MongoDB Atlas.
// Fecha: Lunes, 09 de Mayo 2022.
// Docente: Ing. Juan Antonio Cevallos Macías, Mg.

const mongoose = require("mongoose");
// Credenciales para la conexión a MongoDB Atlas.
const conexion = "mongodb+srv://winterfacci:winter123@cluster0.jhnm0.mongodb.net/mongoose?retryWrites=true&w=majority";
(async() => {

    const conectado = await mongoose.connect(conexion);
    const Grupo = mongoose.model("Grupo", { nombre: String });
    const grupo1 = new Grupo({ nombre: "Administradores" });
    const Permiso = mongoose.model("Permiso", { nombre: String });
    const permiso1 = new Permiso({ nombre: "Guardar" });
    const permiso2 = new Permiso({ nombre: "Eliminar" });

    const Usuario = mongoose.model("Usuario", {
        nombre: String,
        idgrupo: { type: mongoose.Schema.Types.ObjectId, ref: "Grupo" },
        permisos: [{
            permiso: { type: mongoose.Schema.Types.ObjectId, ref: "Permiso" },
            estado: { type: Boolean }

        }],

    });
    const grupoAlmacenado = await grupo1.save();
    //Para guardarPermisos y referenciar desde usuario

    const usuario1 = new Usuario({
        nombre: "Administrador",
        idgrupo: grupoAlmacenado._id,
        permisos: [
            { permiso: permiso1._id, estado: true },
            { permiso: permiso2._id, estado: true }
        ]
    })
    const usuarioAlmacenado = await usuario1.save();
    console.log(usuarioAlmacenado)

})()