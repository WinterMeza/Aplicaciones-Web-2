const servidor =  require('./src/app');

servidor.listen(process.env.PORT||2500, ()=>{
    console.log(`Servidor monolitico corriendo... en el puerto ${process.env.PORT}`);
})