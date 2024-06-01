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

5. **Conexion a la base de datos MongoDB Compass**
   `mongodb+srv://mochillea:Welcome2024@typsa.lnco923.mongodb.net/` 

### Confirmar la Captura de Pantalla

`assets/img/ColeccionesMongo.png`.
![Captura de Pantalla de MongoDB](assets/img/ColeccionesMongo.png)

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
     [
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
     ]
     ```

     - **Ejemplo de Respuesta:**

     ```json
    {
    "message": "Creación de experiencia correcta",
    "experiencias": [
        {
            "nombre": "Aventura en las montañas",
            "categoria": "Aventura",
            "estado": "Activa",
            "actividad": "665b7ea0bc3a0ccb43470bcb",
            "destino": "665b7ea0bc3a0ccb43470bcd",
            "evento": "665b7ea0bc3a0ccb43470bcf",
            "festividad": "665b7ea0bc3a0ccb43470bd1",
            "_id": "665b7ea0bc3a0ccb43470bd3",
            "__v": 0
        }
      ]
    }
     ```

### Explicación Detallada

#### **POST /digital-guide/content**

- **Descripción:** Este endpoint crea una nueva experiencia con sus subdocumentos en la base de datos.
- **Ejemplo de Petición:**
  - Método: `POST`
  - URL: `http://localhost:4000/digital-guide/content`
  - Headers: `Content-Type: application/json`
  - Body: (Selecciona `raw` y `JSON`)

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
   - **Ejemplo de Respuesta:**

     ```json
     {
       "_id": "60c72b2f5f1b2c6d88f5d1c4",
       "nombre": "Aventura en las montañas",
       "categoria": "Aventura",
       "estado": "Activa",
       "actividad": {
         "_id": "60c72b2f5f1b2c6d88f5d1c5",
         "nombre": "Escalada",
         "tipo": "Deporte",
         "puntuacion": 5,
         "imagen": "url_imagen_1",
         "estado": "Disponible"
       },
       "destino": {
         "_id": "60c72b2f5f1b2c6d88f5d1c6",
         "nombre": "Cordillera Blanca",
         "tipo": "Montaña",
         "puntuacion": 5,
         "imagen": "url_imagen_2",
         "estado": "Disponible"
       },
       "evento": {
         "_id": "60c72b2f5f1b2c6d88f5d1c7",
         "nombre": "Festival del Sol",
         "tipo": "Cultural",
         "puntuacion": 5,
         "imagen": "url_imagen_3",
         "estado": "Programado"
       },
       "festividad": {
         "_id": "60c72b2f5f1b2c6d88f5d1c8",
         "nombre": "Fiestas Patrias",
         "tipo": "Nacional",
         "puntuacion": 5,
         "imagen": "url_imagen_4",
         "estado": "Celebrado"
       }
     }
     ```
### Explicación Detallada

#### **GET /digital-guide/content/:id**

- **Descripción:** Este endpoint obtiene una experiencia específica de la base de datos utilizando su ID.
- **Parámetros de Ruta:**
  - `id`: El ID de la experiencia que se desea obtener. Este parámetro es obligatorio.

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
- **Ejemplo de Respuesta:**

     ```json
     {
    "message": "Actualización de experiencia correcta",
    "experiencia": {
        "_id": "665b7d951c545c2348057fc2",
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
        },
        "__v": 0
      }
    }
     ```
### Explicación Detallada

#### **PUT /digital-guide/content/:id**

- **Descripción:** Este endpoint actualiza una experiencia existente en la base de datos utilizando su ID.
- **Parámetros de Ruta:**
  - `id`: El ID de la experiencia que se desea actualizar. Este parámetro es obligatorio.

4. **DELETE /digital-guide/content/:id**
   - **Descripción:** Elimina una experiencia por su ID.
   - **Parámetros de Ruta:**
     - `id`: El ID de la experiencia que se desea eliminar.

   - **Ejemplo de Petición:**

     ```http
     DELETE http://localhost:4000/digital-guide/content/60c72b2f5f1b2c6d88f5d1c4
     ```
   - **Ejemplo de Respuesta:**

     ```json
     {
       "message": "Experiencia eliminada correctamente"
     }
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

   - **Ejemplo de Respuesta:**

     ```json
     {
       "data": [
         {
           "_id": "60c72b2f5f1b2c6d88f5d1c4",
           "nombre": "Aventura en las montañas",
           "categoria": "Aventura",
           "estado": "Activa",
           "actividad": {
             "_id": "60c72b2f5f1b2c6d88f5d1c5",
             "nombre": "Escalada",
             "tipo": "Deporte",
             "puntuacion": 5,
             "imagen": "url_imagen_1",
             "estado": "Disponible"
           },
           "destino": {
             "_id": "60c72b2f5f1b2c6d88f5d1c6",
             "nombre": "Cordillera Blanca",
             "tipo": "Montaña",
             "puntuacion": 5,
             "imagen": "url_imagen_2",
             "estado": "Disponible"
           },
           "evento": {
             "_id": "60c72b2f5f1b2c6d88f5d1c7",
             "nombre": "Festival del Sol",
             "tipo": "Cultural",
             "puntuacion": 5,
             "imagen": "url_imagen_3",
             "estado": "Programado"
           },
           "festividad": {
             "_id": "60c72b2f5f1b2c6d88f5d1c8",
             "nombre": "Fiestas Patrias",
             "tipo": "Nacional",
             "puntuacion": 5,
             "imagen": "url_imagen_4",
             "estado": "Celebrado"
           }
         }
       ],
       "total": 1
     }
     ```
