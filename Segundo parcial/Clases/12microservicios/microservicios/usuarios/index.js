const app = require('./src/app');


app.listen(process.env.PORT, ()=>{
    console.log(`Microservicio de usuarios corriendo en el puerto ${process.env.PORT}`);
})