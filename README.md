# Mochillea Evaluación Técnica

## Descripción

Este proyecto es una aplicación backend desarrollada con el framework [NestJS](https://nestjs.com/), que proporciona una API RESTful para gestionar experiencias turísticas. La aplicación utiliza MongoDB para el almacenamiento de datos.

## Requisitos Previos

- Node.js
- npm 
- MongoDB (puede ser una instancia local o un servicio en la nube como MongoDB Atlas)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/WilliamCipriani/mochilleaEvaluacionTecnica.git
   cd mochilleaEvaluacionTecnica

2. **Instalación de Dependencias**:
   - Abre una terminal en la raíz del proyecto.
   - Ejecuta el comando `npm install` para instalar todas las dependencias necesarias.

3. **Ejecutar la Aplicación**:
   - Utiliza el comando (`npm run start:dev`) para ejecutar la aplicación.

4. **Verificar que Todo Funcione Correctamente**:
   - Asegúrate de que la aplicación se esté ejecutando correctamente accediendo a `http://localhost:4000` o al puerto que hayas configurado.

### Confirmar la Captura de Pantalla

`assets/img/ColeccionesMongo.png`.

### Agregar Documentación de la API con Postman

```markdown
## Documentación de la API

### Endpoints Disponibles

- **POST** /digital-guide/content
- **GET** /digital-guide/content/:id
- **PUT** /digital-guide/content/:id
- **DELETE** /digital-guide/content/:id

#### EJEMPLOS:

1. **POST /digital-guide/content**

  **Descripción:** Crea una nueva experiencia con sus subdocumentos.
   - **Ejemplo de Petición:**

     ```http
     POST http://localhost:4000/digital-guide/content
     Content-Type: application/json
     ```

     ```json
     {
       "nombre": "Aventura en las montañas",
       "categoria": "Aventura",
       "estado": "Activa",
       "actividad": {
         "nombre": "Escalada",
         "tipo": "Deporte",
         "puntuacion": 5,
         "imagen": "url_imagen_1",
         "estado": "Disponible"
       },
       "destino": {
         "nombre": "Cordillera Blanca",
         "tipo": "Montaña",
         "puntuacion": 5,
         "imagen": "url_imagen_2",
         "estado": "Disponible"
       },
       "evento": {
         "nombre": "Festival del Sol",
         "tipo": "Cultural",
         "puntuacion": 5,
         "imagen": "url_imagen_3",
         "estado": "Programado"
       },
       "festividad": {
         "nombre": "Fiestas Patrias",
         "tipo": "Nacional",
         "puntuacion": 5,
         "imagen": "url_imagen_4",
         "estado": "Celebrado"
       }
     }
     ```

2. **GET /digital-guide/content/:id**
- **Descripción:** Obtiene una experiencia por su ID.
   - **Parámetros de Ruta:**
     - `id`: El ID de la experiencia que se desea obtener.

   - **Ejemplo de Petición:**

     ```http
     GET http://localhost:4000/digital-guide/content/60c72b2f5f1b2c6d88f5d1c4
     ```

3. **PUT /digital-guide/content/:id**
   - **Descripción:** Actualiza una experiencia existente.
   - **Parámetros de Ruta:**
     - `id`: El ID de la experiencia que se desea actualizar.

   - **Ejemplo de Petición:**

     ```http
     PUT http://localhost:4000/digital-guide/content/60c72b2f5f1b2c6d88f5d1c4
     ```
    ```json
     {
       "nombre": "Aventura en las montañas actualizada",
       "categoria": "Aventura",
       "estado": "Activa",
       "actividad": {
         "nombre": "Escalada actualizada",
         "tipo": "Deporte",
         "puntuacion": 5,
         "imagen": "url_imagen_1_actualizada",
         "estado": "Disponible"
       },
       "destino": {
         "nombre": "Cordillera Blanca actualizada",
         "tipo": "Montaña",
         "puntuacion": 5,
         "imagen": "url_imagen_2_actualizada",
         "estado": "Disponible"
       },
       "evento": {
         "nombre": "Festival del Sol actualizado",
         "tipo": "Cultural",
         "puntuacion": 5,
         "imagen": "url_imagen_3_actualizada",
         "estado": "Programado"
       },
       "festividad": {
         "nombre": "Fiestas Patrias actualizadas",
         "tipo": "Nacional",
         "puntuacion": 5,
         "imagen": "url_imagen_4_actualizada",
         "estado": "Celebrado"
       }
     }
     ```

4. **DELETE /digital-guide/content/:id**
   - **Descripción:** Elimina una experiencia por su ID.
   - **Parámetros de Ruta:**
     - `id`: El ID de la experiencia que se desea eliminar.

   - **Ejemplo de Petición:**

     ```http
     DELETE http://localhost:4000/digital-guide/content/60c72b2f5f1b2c6d88f5d1c4
     ```

5. **GET /digital-guide/digital-guides/**
  - **Descripción:** Obtiene una lista de experiencias con paginación y filtros opcionales.
   - **Parámetros de Consulta:**
     - `page`: (opcional) Número de página para la paginación.
     - `limit`: (opcional) Número de elementos por página.
     - `nombre`: (opcional) Filtra las experiencias por nombre.
   
   - **Ejemplo de Petición:**

     ```http
     GET http://localhost:4000/digital-guide/digital-guides?page=1&limit=10&nombre=Aventura
     ```
