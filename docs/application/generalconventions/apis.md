---
sidebar_position: 2
---

# Buenas prácticas API

Application Programming Interface: Es un conjunto de protocolos, rutinas y herramientas para crear aplicaciones de software. Las API especifican cómo los componentes de software deben interactuar y comunicarse entre sí, permitiendo que diferentes aplicaciones compartan datos y funcionalidades


## Formato de un Endpoint

La estructura general de un Endpoint es la siguiente

```
https:/domain/product/version/resources/{filters}
```

### Domain

El domain representa el host y puerto donde será publicado el endpoint. Por ejemplo:

```
✅ https:/localhost:8080/
✅ https:/mywebsite.com/
```

### Product

Es un argumento opcional y se usa para agrupar los recursos:

```
✅ https:/localhost:8080/tourism/
✅ https:/mywebsite.com/bankig/
❌ https:/mywebsite.com/inventary/
```

### Versión

Siempre debe mantener el prefijo `v`, sin excepción alguna. Siempre usar numeros enteros.

```
✅ ./v2/vacations
❌ ./v0.1/vacations
❌ ./v1.1/vacations
```

:::tip
Si se realiza un cambio que refleja modificaciones al contrato, la arquitectura y/o la infraestructura, la versión debe cambiar.

Si se realiza un cambio mínimo como una corrección, mejora o validación básica, la versión no debe cambiar.
:::

### Recurso

El recurso puede representar a una capacidad, dominio o entidades de la solución a construir. Debe ser un sustantivo en plural. Nunca debe usar verbos para determina la acción que se quiere ejecutar sobre el recurso.

```
✅ ./vacations
✅ ./people
❌ ./updateVacation
❌ ./getPeople
```

### Sub-recursos

En algunas ocaciones, va a necesitar asociar subrecursos, aplique las mismas reglas que se usan para declarar recursos

```
✅ ./pets/breeds/
❌ ./getPetsAllBreeds
```

### Filtros

Si es necesario filtrar el recurso por algunas de sus caracteristicas puedes incluir los filtros.

```
✅ ./pets/breeds/{size} 
// List all breeds that have a medium size
🏃🏼 ./pets/breeds/medium 
```

```
✅ ./rooms/{id}/amenites/ 
// List all the amenities of room number 1 in the hotel
🏃🏼 ./rooms/1/amenites/ 
```

## Verbos


### 1. Leer usando GET 

<UrlHighlight method="get">./hotels</UrlHighlight>

Lista todos los recursos de tipo **hotels** sin filtro o criterio de búsqueda alguno

<UrlHighlight method="get">./hotels/13</UrlHighlight>

Obtiene un elemento específico del conjunto de **hotels** cuyo identificador único es **13**

<UrlHighlight method="get">./hotels?name=MyHotel</UrlHighlight>

Lista todos los recursos de tipo **hotels** cuyo **nombre sea MyHotel**

:::tip
Si desea realizar un filtro más avanzado, puede hacer uso de un [query string](https://en.wikipedia.org/wiki/Query_string):<br/> 
`./hotels/?city=myCity`
:::

:::tip
Para este y todos los casos en los que se requiera usar un parámetro, este debe respetar la convención **lowerCamelCase**, es decir, si la consulta necesita incluir el nombre del hotel, se debería usar el `query string`:<br/> 
`./hotels/?name=MyHotel`
:::




### 2. Crear usando POST

<UrlHighlight method="post">./hotels</UrlHighlight>

Crea un nuevo recurso de tipo **hotels** y en caso de éxito, el `status code` será `201 (Created)` 

Para este y todos los casos en los que se requiera enviar información en el body, el [JSON](https://www.json.org/json-en.html) requerido debe respetar la convención **lowerCamelCase**, considerando el campo `data` como elemento principal, es decir:
```json
{
    "data": {
        "hotels": {
            "name": "MyHotel",
            "address": "Avenue 1 # 12-100 AC"
        }
    }
}
```

### 3. Actualizar usando PUT o PATCH

#### 3.1 PUT para actualización total

<UrlHighlight method="put">./hotels/12</UrlHighlight>

Actualizará el recurso **employee** con identificador `12`, reemplazando la informacion por el contenido de los valores enviados en el `body` de la operación realizada

#### 3.2 PATCH para actualización parcial

<UrlHighlight method="patch">./hotels/13</UrlHighlight>

Actualizará el recurso **employee** con identificador `13`, reemplazando únicamente los valores que se hayan enviado en el `body` de la operación realizada

:::info
En todos los casos, el [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) será `200 (OK)` cuando la operación se haya efectuado sin problemas y `204 (No Content)` cuando no se haya encontrado el recurso a actualizar.
:::

#### 4. Eliminar usando DELETE

<UrlHighlight method="delete">./hotels/42</UrlHighlight>

Eliminará el recurso employee con identificador 42

:::info
Para estos casos, el [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) será `202 (Accepted)` cuando la operación se haya efectuado sin problemas y `204 (No Content)` cuando no se haya encontrado el recurso a eliminar.
:::

# Mensajes de error

## Códigos HTTP a utilizar

- ✅ 200 (Ok): la ejecucion fue realiza con exito
- ✅ 201 (Create): Se ha creado un nuevo recurso
- ❌400 (Bad Request): Los parámetros enviados no cumplen con los formatos/validaciones requeridas
- ❌401 (Unauthorized): No se cuenta con los permisos suficientes para acceder al recurso
- ❌404 (Not Found): El recurso no existe
- ❌500 (Internal Server Error): Error interno