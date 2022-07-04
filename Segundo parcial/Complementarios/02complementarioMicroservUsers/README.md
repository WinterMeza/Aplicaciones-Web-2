# APLICACIONES WEB 2
- Nombres y Apellidos: Winter Aníbal Meza Jiménez.
- Curso: Sexto "B" 2022(1).
- Complementario: 01Complementario Microservicios.
- Fecha: Domingo, 3 de julio de 2022.
- Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
***
## Instrucciones para la configuración e implementación de Docker 
1. En la carpeta user-service se instala los módulos y paquetes necesarios para evitar errores, para hacerlo abrimos la terminal y usamos el comando:
 ```
$ nmp install

```  
2. Se crea la imagen en el docker a través del siguiente comando:
```
$ docker-compose build

```
2. Se ejecuta la imagen creada en el docker a través del siguiente comando:
```
$ docker-compose up
```
3. Observar que el servidor se ejecute sin problemas tanto en el docker como en el Visual Code.
***
## Configuración de las variables de entorno
### Docker-compose:
1. version: Debemos indicar que versión de docker-compose vamos a utilizar para la cual trabajaremos con la versión 3.
2. services: indicaremos los diferentes servicios que vamos a utilizar y cada uno de ellos será convertido en un contenedor.
3. user: se crea el contenedor del user-service.
4. depends_on:  tenemos un contenedor que depende de otro en este caso dependemos de mongo.
5. environment: Podemos enviar variables de entorno a nuestro contenedor, normalmente las imágenes utilizan estas variables para distintos temas de configuración para la cual asignaremos MONGODB_CNN.
6. image: Indicamos qué imagen vamos a utilizar para el cual usamos la de la base de datos NOSQL mongo y el servidor nginx.
7. nginx: es un servidor web/proxy, se configura la imagen y se utiliza la última versión colocando latest.
8. ports: Los puertos que van a enrutar desde el exterior del contenedor al interior para el cual asignamos 8080  y en el mongo 27017 por defecto.
9.  volumes:permite mapear elementos del sistema de archivos del interior del contenedor con elementos del sistema de archivos en el exterior para la cual asignamos .volumes:permite mapear elementos del sistema de archivos del interior del contenedor con elementos del sistema de archivos en el exterior para la cual asignamos ./nginx.conf:/etc/nginx/conf.d/default.conf
10. depends_on:  tenemos un contenedor que depende de otro en este caso dependemos de user.
## Instrucciones para la configuración e implementación de nginx.conf
1. Se configura los parámetros relevantes del host virtual. Puede haber varios servidores en un http. Pero en nuestro caso al ser una ruta solo será para Users.
2. Bloque de Puerto: Se configura el puerto a través del cual se enviará y guardará los datos del usuario en la base de datos de MongoDB en el cual definimos el puerto: 8080.
3. Bloque de ubicación: Se configure el enrutamiento de solicitudes y el procesamiento de varias páginas a través de la ruta: /TecnoService/api/users  y dentro de ella su enlace http://user:3000/TecnoService/api/users
