// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 03Complementario CSR.
// Fecha: Viernes, 15 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Importamos las interfaces y servicios.
import { IResUser, User } from "../interfaces/IUser";
import { errorAxios, _http } from "../services/userService";
// Función para registrar los usuarios con sus respectivos atributos.
const registrar = async (nombres : any, apellidos : any, cedula : any, email : any, password : any, role : any) => {
    const data: User = {
        nombres: nombres.value,
        apellidos: apellidos.value,
        cedula: cedula.value,
        email: email.value,
        password: password.value,
        role: role.value,
    }
    // Manejos de errores para el registro correcto de usuarios.
    try {
        const respUser : User | any = await _http.post<User>(
            `/registrar`,
            data
        )

        const {user} : User | any = await respUser.data;

        console.log(`El usuario ${user.nombres} fue registrado correctamente!`);        

    } catch (error: Error | any) {
        errorAxios(error)
    }
}

const editar = async (id : any, nombres : any, apellidos : any, cedula : any, email : any, password : any, role : any, cuerpo : any) => {
    const data: User | any = {
        id: id.value,
        nombres: nombres.value,
        apellidos: apellidos.value,
        cedula: cedula.value,
        email: email.value,
        password: password.value,
        role: role.value,
    }
    try {
        const respUser : User | any = await _http.put<User>(
            `/editar/${id.value}`,
            data
        )
            
        const {data_act} = await respUser.data;

        console.log(`El usuario ${data_act.nombres} fue editado correctamente!`);
        consultar(id, nombres, apellidos, cedula, email, password, role, cuerpo)
        limpiar(id, nombres, apellidos, cedula, email, password, role)

    } catch (error: Error | any) {
        errorAxios(error)
    }
}
// Función para consultar los usuarios registrados.
const consultar = async (id : any, nombres : any, apellidos : any, cedula : any, email : any, password : any, role : any, cuerpo: any) => {
    // Consulta de forma general.
    const resuser : IResUser = await (await _http.get<IResUser>(`/`)).data;
    // Tabla de CRUD.
    const tabla = document.createElement("table");
    tabla.id = "tabla";
    tabla.border = "1"
    tabla.style.marginTop = '40px'
    tabla.style.marginLeft = '35%'

    const {users} = resuser;      
    console.log(resuser);
      
    // Arreglo para buscar un usuario.
    for(const user of users)
    {

        const row = tabla.insertRow();
        const celda = row.insertCell();
        celda.innerHTML = `<button class="boton" value=${user._id}>${user.nombres}</button>`
        const celda2 = row.insertCell()
        celda2.innerHTML = `${user.cedula}`
        const celda3 = row.insertCell()
        celda3.innerHTML = `${user.email}`

    }

    //Consulta de forma individual.
    cuerpo.innerHTML= ``
    cuerpo.appendChild(tabla);
    document.querySelectorAll('.boton').forEach((btn : Element) => {
        btn.addEventListener('click', async () => {
            const idx = (btn as HTMLButtonElement).value;
            console.log(idx);
            
            const {user} : User | any = await (await _http.get<User>(`/ver/${idx}`)).data;
            console.log(user);
            
            id.value = user._id!;
            nombres.value = user.nombres;
            apellidos.value = user.apellidos;
            cedula.value = user.cedula;
            email.value = user.email;
            password.value = user.password;
            role.value = user.role;            

        })
    })

}
// Función para eliminar un usuario registrado.
const eliminar =async (id:any) => {
    
    try {
        const respUser : User | any = await _http.delete<User>(
            `/eliminar/${id.value}`
        )

        const {user}= await respUser.data;

        console.log(`El Usuario ${user.nombres} fue eliminado correctamente!`);
        

    } catch (error: Error | any) {
        errorAxios(error)
    }

}
// Función para limpiar los campos del formulario CRUD em un usuario registrado.
const limpiar = (id : any, nombres : any, apellidos : any, cedula : any, email : any, password : any, role : any) => {

    id.value = ""
    nombres.value = ""
    apellidos.value = ""
    cedula.value = ""
    email.value = ""
    password.value = ""
    role.value = ""
}
// Se exportan las funciones creadas.
export {
    registrar,
    editar,
    consultar,
    eliminar,
    limpiar
}

