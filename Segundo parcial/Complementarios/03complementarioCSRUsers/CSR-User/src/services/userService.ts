// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 03Complementario CSR.
// Fecha: Viernes, 15 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Importamos la librería de axios y la interfaz.
import axios from 'axios';
import {IResUser} from '../interfaces/IUser'

export const _http = axios.create({
    // Ruta padre, hay que levantar microservicios para ejecutarlo.
    baseURL: 'http://localhost:3100/TecnoService/api/users'
})
// Funciones del CRUD.
// Enviar datos del usuario.
export const postUser = async (url: string, data: IResUser[]) => {
    return await _http.post(url, data)
}
// Obtener del usuario.
export const getUser = async (url: string) => {
    return await _http.get(url)
}
// Actualizar datos del usuario.
export const putUser = async (url: string, data: IResUser[]) => {
    return await _http.put(url, data)
}
// Borrar datos del usuario.
export const deleteUser = async (url: string) => {
    return await _http.delete(url)
}
// Mostrar error en caso de qie falle el servidor.
export const errorAxios = (error: Error) => {
    if(axios.isAxiosError(error)){
        
        console.log('Error en el servidor');
        
    }
}




