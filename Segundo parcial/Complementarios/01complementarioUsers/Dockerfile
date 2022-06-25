# APLICACIONES WEB 2
# Nombres y Apellidos: Winter Aníbal Meza Jiménez.
# Curso: Sexto "B" 2022(1).
# Complementario: 01Complementario Docker.
# Fecha: Viernes, 24 de mayo de 2022.
# Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

                               #Configuración para el Docker.
# Establece la imagen base node.
FROM node:12
# Copia los archivos y directorios de la Imagen de app.
COPY . /app
# Cambiar de directorio actual en app.
WORKDIR /app
# Copia todos los archivos del package.json .
COPY package*.json ./
# Ejecutar el comando de Imagen durante el proceso de construcción, en este caso instala 
# todos los paquetes y librías que se utilizaron hacía la imagen del docker.
RUN npm install
# Se define la asignación de puerto para contenedores en ejecución para la cual se asigno el puert0 3000
EXPOSE 3000
# Establece argumentos estándar para el inicio del contenedor y se ejetuta en el index.js
CMD ["node", "dist/index.js"]
