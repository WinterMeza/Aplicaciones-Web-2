import { connect } from "mongoose";

const dbConnection =async () => {
    
    try {
        
        const urlDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@tareas.h1awilj.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`

        await  connect(urlDB)
        console.log("Base de datos conectada correctamente!");
        console.log("*******************************************");
    } catch (error) {
        console.log(error);
        throw new Error(`La base de datos no esta disponble`)    
    }

}

export {
    dbConnection
}