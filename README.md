# Prototipo para la gestión documental de la FIS EPN
***
El presente proyecto corresponde a un prototipo para gestionar los documentos físicos que se encuentran en posesión de la facultad de ingeniería en sistemas de la Escuela Politécnica Nacional.

## Contenidos
1. [Requisitos](#requisitos)
2. [Instalación](#instalación)
4. [Importar usuarios](#importar-usuarios)
5. [Video demostrativo](#video-demostrativo)

## Requisitos

Para la ejecución del proyecto es necesario contar con
* [NodeJS](https://nodejs.org/en)
* [MongoDB](https://nodejs.org/en)
* [Git](https://git-scm.com)
  
Adicional, se se desea modificar el código fuente del proyecto, es necesario contar con un editor de codigo. Se recomienda Visual Studio Code
* [Visual Studio Code](https://nodejs.org/en)

## Instalación

Para ejecutar el proyecto es necesario clonar el repositorio haciendo uso del comando `git clone` y ejecutarlo con el comando `npm start`, los comandos necesarios se presentan a continuación:
```
$ git clone https://github.com/MarlonP-28/TesisPrototipo.git
$ npm start
```
Nota: El comando `npm start` debe ser ejecutado dentro del repositorio clonado.
## Importar usuarios

Para poder iniciar sesión en el sistema de gestión documental es necesario contar con los usuarios del sistema, para esto existen algunos usuarios que han sido previamente creados. A continuación se presentan los usuarios disponibles que se pueden utilizar en el sistema desarrollado, en caso de requerir mas usuarios estos pueden ser agregados haciendo uso de la cuenta "admin" la cual tiene rol de administrador.

|usuario|correo|contraseña|
|---|---|---|
|admin|admin@epn.edu.ec|@dminF1$2023|
|jefatura|jefatura@epn.edu.ec|JefaturaF1$2023|
|decanato|asistente.denacato@epn.edu.ec|Decanato$2023|
|subdecanato|subdecanato@epn.edu.ec|Subdec@nato%2023|

Los usuarios previamente creados deben ser importados en mongoDB, a continuación se muestra un ejemplo.

![mongoDB](https://github.com/MarlonP-28/TesisPrototipo/assets/43424735/b36c01a8-8eb9-4ce2-a132-025b5c9c1e8e)

El JSON con los usuarios creados se muestra a continuación:

```json
[{
  "_id": {
    "$oid": "6598ef2e0e4ba89de7d0a960"
  },
  "name": "admin",
  "facultad": "FIS",
  "rol": "Admin",
  "email": "admin@epn.edu.ec",
  "password": "$2a$10$XgkUYDRGn0e/rjZ.yy.F2./boGYn9gzBpRC2aG12JMFeNgJYYnVoe",
  "state": "1",
  "typeuser": [
    "editor",
    "visualizador"
  ],
  "createdAt": {
    "$date": "2024-01-06T06:11:58.872Z"
  },
  "updatedAt": {
    "$date": "2024-01-09T02:04:02.791Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6598efd326dfe98350922396"
  },
  "name": "Decanato",
  "facultad": "FIS",
  "rol": "Decanato",
  "email": "decanato@epn.edu.ec",
  "password": "$2a$10$7JYdtoZk83ewpsi5Fu3NIeXVOIVj8PoOShIfwJRMJb691Ou7cAX42",
  "state": "1",
  "typeuser": [
    "editor",
    "visualizador"
  ],
  "createdAt": {
    "$date": "2024-01-06T06:14:43.263Z"
  },
  "updatedAt": {
    "$date": "2024-01-15T21:20:45.410Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6598efef26dfe9835092239f"
  },
  "name": "Subdecanato",
  "facultad": "FIS",
  "rol": "Subdecanato",
  "email": "subdecanato@epn.edu.ec",
  "password": "$2a$10$gnl3rxfAYl9KVaY3V99QruwgivhR8vFeSzrcs9EG6oIWfdZYlUHjm",
  "state": "1",
  "typeuser": [
    "editor",
    "visualizador"
  ],
  "createdAt": {
    "$date": "2024-01-06T06:15:11.596Z"
  },
  "updatedAt": {
    "$date": "2024-01-18T00:01:16.284Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6598f00e26dfe983509223a8"
  },
  "name": "Jefatura",
  "facultad": "FIS",
  "rol": "Jefatura",
  "email": "jefatura@epn.edu.ec",
  "password": "$2a$10$qgd6wnkYYXdNoVGz9krA4u/0QL1HjnDWVt2h4Zd.GvQoHHg6p76zu",
  "state": "1",
  "typeuser": [
    "editor",
    "visualizador"
  ],
  "createdAt": {
    "$date": "2024-01-06T06:15:42.415Z"
  },
  "updatedAt": {
    "$date": "2024-01-18T15:58:11.733Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65a5a06105efa6855000a1c8"
  },
  "name": "Asitente-Decanato",
  "facultad": "FIS",
  "rol": "Decanato",
  "email": "asistente.decanato@epn.edu.ec",
  "password": "$2a$10$zVaeEyNEOFV.YavHHxtVEuZl0QiPRKrOwQxiSN/tcfcd07NsNhvAG",
  "state": "1",
  "typeuser": [
    "editor",
    "visualizador"
  ],
  "createdAt": {
    "$date": "2024-01-15T21:15:13.683Z"
  },
  "updatedAt": {
    "$date": "2024-01-15T21:15:13.683Z"
  },
  "__v": 0
}]
```

## Video demostrativo

A continuación se presenta un ejemplo sobre el funcionamiento del sistema

https://github.com/MarlonP-28/TesisPrototipo/assets/43424735/29dd03c5-811c-42f3-be86-9d52e7eef65d

