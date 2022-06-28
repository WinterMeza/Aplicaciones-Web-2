# APLICACIONES WEB 2
# Nombres y Apellidos: Winter Aníbal Meza Jiménez.
# Curso: Sexto "B" 2022(1).
# Clase: Ejemplo microservicios / Proxy and dockercompose.
# Fecha: Martes, 28 de junio de 2022.
# Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

# Establece la imagen base node.
FROM node
# Copia los archivos y directorios de la Imagen de app.
COPY . /app
# Cambiar de directorio actual en app.
WORKDIR /app
# Ejecutar el comando de Imagen durante el proceso de construcción, en este caso instala 
# todos los paquetes y librías que se utilizaron hacía la imagen del docker.
RUN npm install

ENV PORT 3000
# Se define la asignación de puerto para contenedores en ejecución para la cual se asigno el puert0 3000.
EXPOSE 3000
# Especifica el ejecutable que usará el contenedor para la cual usamos npm y start.
ENTRYPOINT ["npm", "start"]