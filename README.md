# Emisora Web - Backend

Este es el repositorio para el backend de la página web de una emisora, que ofrece acceso a contenido multimedia como música, libros, películas, noticias, entre otros. El backend está construido con **Express** y utiliza **PostgreSQL** como base de datos.

## Tecnologías Utilizadas

- **Express**: Framework minimalista para aplicaciones web de Node.js.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **Dotenv**: Para gestionar variables de entorno.
- **pg**: Cliente de PostgreSQL para Node.js.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js (>= 14)
- npm (>= 6) o yarn (opcional)
- PostgreSQL (Configurado y corriendo en tu máquina)

## Instalación

1. Clona este repositorio:
    ```bash
   git clone https://github.com/jluchett/emisora_back.git
    ```
2. Navega a la carpeta del proyecto:
    ```bash
   cd emisora_back
   ```

3. Instala las dependencias:
    ```bash
   npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y agrega las variables de entorno necesarias para la conexión a la base de datos PostgreSQL:
```bash
    DB_HOST=localhost 
    DB_PORT=5432 
    DB_USER=tu-usuario 
    DB_PASSWORD=tu-contraseña 
    DB_NAME=nombre_base_datos
```

## Scripts Disponibles

- npm run dev o yarn dev: Inicia el servidor de desarrollo con **nodemon**.
- npm start o yarn start: Inicia el servidor en producción.

## Estructura del Proyecto
```bash
    ├── controllers 
    ├── routes 
    ├── db 
    ├── middleware  
    ├── .env 
    ├── index.js 
    └── package.json
```
- **controllers/**: Controladores que manejan la lógica de las rutas.
- **routes/**: Definición de las rutas de la API.
- **db/**: Configuración de la base de datos y conexiones.
- **middleware/**: Middlewares personalizados.
- **index.js**: Punto de entrada de la aplicación.
- **.env**: Archivo de variables de entorno.

## Base de Datos

El proyecto utiliza PostgreSQL para almacenar la información. Asegúrate de tener la base de datos configurada correctamente. Si necesitas crear las tablas, puedes ejecutar un script SQL o manejar la creación de tablas desde tus modelos en **models/**.

## Contribución

Si deseas contribuir, siéntete libre de abrir un _pull request_ o _issue_ en el repositorio.
