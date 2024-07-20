# Trainee level - API with NestJs

## Descripción:
El objetivo es desarrollar una API RESTful para la gestión de tareas utilizando NestJS. La API debe permitir crear, leer, actualizar y eliminar tareas (CRUD) y debe incluir autenticación básica.

## Requisitos:

### Endpoints:

- **POST** /tasks: Crear una nueva tarea.
- **GET** /tasks: Obtener todas las tareas.
- **GET** /tasks/:id: Obtener una tarea específica por ID.
- **PUT** /tasks/:id: Actualizar una tarea por ID.
- **DELETE** /tasks/:id: Eliminar una tarea por ID.

### Entidades

#### Modelo Task:

- **id** (id autogenerado incremental)
- **title** (string, requerido)
- **description** (string, opcional)
- **status** (enum: pending, in_progress, completed)
- **created_at** (timestamp)
- **updated_at** (timestamp)

### Validación y Manejo de Errores:

Validar entradas en los endpoints.
Manejar errores de manera adecuada y retornar códigos de estado HTTP apropiados.

## Entregables:
- Código fuente en un repositorio público (por ejemplo, GitHub).
- Instrucciones claras sobre cómo configurar y ejecutar el proyecto.

## Bonus (opcional):
- Pruebas unitarias y de integración.
- Documentación Swagger accesible desde un endpoint (/api/docs).

## Evaluación:
- Funcionalidad: La API debe cumplir con todos los requisitos especificados.
- Código limpio: Buenas prácticas de codificación y estructura de proyecto.
- Documentación: Claridad en la documentación de la API y del proyecto.
- Creatividad y Bonus: Implementación de características adicionales y creatividad en la solución.

## Recursos utiles y documentacion
La documentacion necesaria para realizar el challenge se encuentra [aqui](./docs.md).

## Mensaje final.
El detalle, profundidad y perfeccion de cada pieza del codigo puede demandar tiempo y energia. Ambos son recursos escasos para nosotros, por lo que se recomienda trabajar siempre con un objetivo claro y una hoja de ruta clara.
1. Comprender los requisitos necesarios de challenges.
2. Comprender el framework NestJs es indispensable para iniciar este challenge. La documentacion oficial del framwork es clara, detallada y contiene el paso a paso necesario para realizar los ejemplos.
3. Luego del planeamiento viene la fase de construccion: Es tiempo de poner manos a la obra. En este momento nos interesa constuir una solucion con pilares solidos, con una estrucutra de carpetas clara que nos permita desplazarnos por el codigo.
Es importante que en esta etapa solo buscamos cumplir con los requisitos necesarios del challenge.
4. Una vez que los requisitos minimos o necesarios estan asegurados, podemos darnos libertad de implementar nuevas funcionalidades.
Ya sean las que se definen en [Bonus](#bonus-opcional) o cualquier otra funcionalidad que sea util.