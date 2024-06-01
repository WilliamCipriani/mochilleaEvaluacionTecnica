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

La documentación de la API está disponible en la colección de Postman incluida en este repositorio. Para importar la colección:

1. Abre Postman.
2. Haz clic en "Importar" en la esquina superior izquierda.
3. Selecciona el archivo `mochillea-evaluacion-tecnica.postman_collection.json` ubicado en la raíz del proyecto.
4. La colección se importará y podrás ver todos los endpoints disponibles.

### Endpoints Disponibles

- **GET** /digital-guide/digital-guides
- **POST** /digital-guide/content
- **GET** /digital-guide/content/:id
- **PUT** /digital-guide/content/:id
- **DELETE** /digital-guide/content/:id