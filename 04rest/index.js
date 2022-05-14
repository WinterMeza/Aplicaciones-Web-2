// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Servidor Rest.
// Fecha: Viernes, 13 de Mayo 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
// Se declaran las rutas.
const app = express();
const ruta = express.Router();
const PUERTO = 2500;
let comidas = [];
app.use(cors()).use(express.json());

ruta.get('/', (req, res) => {
    res.status(200).send(comidas);
})

ruta.post('/', (req = request, res) => {
    const { body } = req;
    //TODO validar 
    comidas.push(body);
    res.status(200).send({
        message: "Se insertó correctamente",
        response: body
    })

})

app.use('/comida', ruta);

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en puerto ${PUERTO}`);
})