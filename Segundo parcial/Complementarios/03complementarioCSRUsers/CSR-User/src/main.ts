// APLICACIONES WEB 2
// Nombres y Apellidos: Winter Aníbal Meza Jiménez.
// Curso: Sexto "B" 2022(1).
// Complementario: 03Complementario CSR.
// Fecha: Viernes, 15 de julio de 2022.
// Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
// Importamos los estilos de css y las funciones de los controladores.
import './style.css'
import {registrar, editar, consultar, eliminar, limpiar} from './controllers/user'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Usuario</h1>
`

const etiqueta = document.createElement("label");
etiqueta.textContent = "Id User"

const input = document.createElement("input");
input.id = "id"

etiqueta.htmlFor="id"
input.style.marginLeft = '2.8%'

app.appendChild(etiqueta);
app.appendChild(input);
// Cuadros de campos para ingresar y otras modificaciones de los datos del usuario en el CRUD.
app.innerHTML += `

<br><br><label for="nombres">Nombres</label><input id="nombres" style='margin-left: 2%'></input><br><br>
<label for="apellidos">Apellidos</label><input id="apellidos" style='margin-left: 2%'></input><br><br>
<label for="cedula">Cedula</label><input id="cedula" style='margin-left: 2.8%'></input><br><br>
<label for="email">Email</label><input id="email" style='margin-left: 3.4%'></input><br><br>
<label for="password">Password</label><input id="password" style='margin-left: 1.4%'></input><br><br>
<label for="role">Role</label><input id="role" style='margin-left: 3.8%'></input><br><br>

<button id="registrar">Registrar Usuario</button>
<button id="editar">Editar Usuario</button>
<button id="consultar">Consultar Usuario</button>
<button id="eliminar">Eliminar Usuario</button>
<button id="limpiar">Limpiar Campos</button>
<div id="cuerpo"/>

`

//Configuración de los botones en el CRUD.
const grabar = document.querySelector<HTMLButtonElement>('#registrar')!;
const edit = document.querySelector<HTMLButtonElement>('#editar')!;
const consult = document.querySelector<HTMLButtonElement>('#consultar')!;
const borrar = document.querySelector<HTMLButtonElement>('#eliminar')!;
const clean = document.querySelector<HTMLButtonElement>('#limpiar')!;

//Configuración de los campos en el CRUD.
const id = document.querySelector<HTMLInputElement>('#id');
const nombres = document.querySelector<HTMLInputElement>('#nombres');
const apellidos = document.querySelector<HTMLInputElement>('#apellidos');
const cedula = document.querySelector<HTMLInputElement>('#cedula');
const email = document.querySelector<HTMLInputElement>('#email');
const password = document.querySelector<HTMLInputElement>('#password');
const role = document.querySelector<HTMLInputElement>('#role');

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo');

//Asignación de los métodos a los botones en el CRUD.
grabar.addEventListener('click', () => {
  registrar(nombres, apellidos, cedula, email, password, role)
})
edit.addEventListener('click', () => {
  editar(id, nombres, apellidos, cedula, email, password, role, cuerpo)
})
consult.addEventListener('click', () => {
  consultar(id, nombres, apellidos, cedula, email, password, role, cuerpo)
})
borrar.addEventListener('click', () => {
  eliminar(id)
})
clean.addEventListener('click', () => {
  limpiar(id, nombres, apellidos, cedula, email, password, role)
})

