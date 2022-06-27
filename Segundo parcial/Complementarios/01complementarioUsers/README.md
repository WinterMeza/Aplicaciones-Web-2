# APLICACIONES WEB 2
- Nombres y Apellidos: Winter Aníbal Meza Jiménez.
- Curso: Sexto "B" 2022(1).
- Complementario: 01Complementario Docker.
- Fecha: Domingo, 26 de mayo de 2022.
- Docente: Ing. Jhon Antonio Cevallos Macías, Mg.
***
## Instrucciones para la configuración e implementación de Docker 

1. Se crea la imagen en el docker a través del siguiente comando:
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
3. depends_on:  tenemos un contenedor que depende de otro en este caso dependemos de mongo.
4. environment: Podemos enviar variables de entorno a nuestro contenedor, normalmente las imágenes utilizan estas variables para distintos temas de configuración para la cual asignaremos MONGODB_CNN.
5. ports: Los puertos que van a enrutar desde el exterior del contenedor al interior para el cual asignamos 3000 por defecto y en el mongo 27017.
6. image: Indicamos qué imagen vamos a utilizar para el cual usamos la de mongo.
7. command: sobreescribe el comando predeterminado del contenedor. Esta opción es ideal para ejecutar un comando cuando inicia un servicio mongod --quiet --logpath /dev/null.