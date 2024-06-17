# Proyecto de Visualización de Posts

Este proyecto tiene como objetivo mostrar los posts obtenidos desde un servidor, permitiendo cambiar la petición a la API original utilizando la siguiente dirección: [https://dummyapi.io/data/v1/](https://dummyapi.io/data/v1/). Las consultas utilizadas fueron `post` y `user`, las cuales requieren el ID generado en dicha API. Para la persistencia de los posts se utilizó MongoDB. El proyecto está dividido en dos partes: `client` y `server`.

## Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Uso del Proyecto](#uso-del-proyecto)
- [Deploy](#deploy)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción del Proyecto

El proyecto permite visualizar posts obtenidos desde un servidor y ofrece la posibilidad de cambiar la fuente de datos a una API específica. La persistencia de los posts se maneja mediante una base de datos MongoDB. La aplicación está dividida en dos partes principales:

1. **Client**: Una aplicación web basada en React, que utiliza Redux Tool Kit para el manejo del estado y Material UI para el diseño de la interfaz.
2. **Server**: Un servidor desarrollado con ExpressJS que maneja la autenticación utilizando JWT, Passport y Google OAuth. 

## Tecnologías Utilizadas

### Client
- React
- Redux Tool Kit
- Material UI
- GitHub Pages
- Vercel

### Server
- ExpressJS
- JWT (JSON Web Tokens)
- Passport
- Google OAuth
- MongoDB
- Render

## Estructura del Proyecto



## Instalación y Configuración

### Requisitos Previos

- Node.js
- MongoDB

### Instalación

#### Clonar el Repositorio

```bash
git clone https://github.com/luchopesce/web-app
cd client
```

### Configuración del Cliente

Crea un archivo `.env` en el directorio raíz del cliente (`client`) y configura las siguientes variables de entorno sin valores específicos:

```plaintext
REACT_APP_API_SERVER_URL=
REACT_APP_API_URL=
REACT_APP_API_ID=
```

- Configurar Variables de Entorno
- Abre el archivo .env y asigna los valores adecuados a cada variable según la configuración de tu cliente y servicios externos.

Instalar Dependencias

```bash
npm install
```
```bash
npm start
```
## Servidor
- El servidor está construido con Express.js e implementa autenticación JWT y Google OAuth para la gestión de usuarios.

- Funcionalidades del Servidor
Gestión de usuarios mediante autenticación JWT y Google OAuth.
Persistencia de posts en MongoDB.
Configuración del Servidor
Crea un archivo .env en el directorio raíz del servidor (server) y configura las siguientes variables de entorno sin valores específicos:

```plaintext
BASE_API_URL=
CLIENT_URL=
PORT=
MONGO_URL=
JWT_SECRET=
APP_ID=
API_EXTERN_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
```

## Instalación del Servidor

### Clonar el Repositorio

```bash
git clone https://github.com/luchopesce/web-app
cd server
```

Configurar Variables de Entorno
Abre el archivo .env y asigna los valores adecuados a cada variable según la configuración de tu servidor y servicios externos.

### Instalar Dependencias

```bash
npm install
```

### Iniciar el Servidor

```bash
npm start
```