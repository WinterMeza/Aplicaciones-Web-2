const app = require('./src/app');


app.listen(process.env.PORT, ()=>{
    console.log(`Microservicio de clientes corriendo en el puerto ${process.env.PORT}`);
})
