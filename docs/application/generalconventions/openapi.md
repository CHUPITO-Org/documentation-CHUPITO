---
sidebar_position: 2
---


# OpenApi

La Especificación OpenAPI es un lenguaje utilizado para definir APIs HTTP de manera estandarizada, lo que facilita a los desarrolladores comprender cómo funciona una API y permite una configuración más sencilla de la infraestructura. Con la Especificación OpenAPI, los desarrolladores pueden generar código de cliente y crear casos de prueba para sus APIs, optimizando el proceso de desarrollo y mejorando la eficiencia general. [Link](https://www.openapis.org/)


## Pasos

Comience definiendo los puntos finales que expondrá su API. Esto incluye la ruta URL, el método HTTP y cualquier parámetro de consulta o cuerpo de solicitud.

``` yaml
servers:
  - url: https://api.example.com/v1
paths:
  /users:
    get: ...
    Pos: ...
    put: ...
```

Defina los modelos de datos que utilizará su API. Esto incluye la estructura de cualquier cuerpo de solicitud o respuesta, así como cualquier tipo de datos o reglas de validación.

``` yaml
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        email:
          type: string
          format: email
      required:
        - name
        - email
```

Utilice el pluging [OpenAPI swagger Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi) para editar y validar contratos OpenAPI.


Finalmente el resultado final seria como el siguiente ejemplo:

``` yaml
openapi: 3.0.0
info:
  title: Example API
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
paths:
  /users:
    get:
      summary: Get a list of users
      operationId: getUsers
      responses:
        '200':
          description: A list of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
    post:
      summary: Create a new user
      operationId: createUser
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
      responses:
        '201':
          description: The created user
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        email:
          type: string
          format: email
      required:
        - name
        - email
```