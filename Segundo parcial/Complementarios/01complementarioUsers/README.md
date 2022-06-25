# APLICACIONES WEB 2
- Nombres y Apellidos: Winter Aníbal Meza Jiménez.
- Curso: Sexto "B" 2022(1).
- Complementario: 01Complementario Docker.
- Fecha: Viernes, 24 de mayo de 2022.
- Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

## Instrucciones para la configuración e implementación de Docker 

1. Se crea la imagen en el docker a través del siguiente comando:
- docker build -t 01complementario .
2. Se ejecuta la imagen creada en el docker a través del siguiente comando:
- docker run -p 3000:3000 --rm -e MONGO_USER=grupo8 -e MONGO_PASS=GrupO8 01complementario
3. Observar que el servidor se ejecute sin problemas.