// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Clase: Ejemplo microservicios / Proxy and dockercompose.
// Fecha: Martes, 28 de junio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

// Se importa app de la carpeta recursos.
const app = require('./src/app');

// método de listen ya que permite que  el usuario conozca en que puerto está corriendo el servido del microservicio.
app.listen(process.env.PORT, () => {
    console.log(`Microservicio de productos corriendo en el puerto ${process.env.PORT}`);
})