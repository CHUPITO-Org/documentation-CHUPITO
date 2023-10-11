# Development Portal

Este site está contruido con [Docusaurus 2](https://docusaurus.io/), un framework moderno para generar portales de documentación.


## Guía rápida

### Requisitos

[Node.js](https://nodejs.org/en/download/) versión 16.14 o superior (esto se puede comprobar usando el comando `node -v`). Puedes usar [mvn](https://github.com/nvm-sh/nvm) para manejar multiples versiones de Node instaladas en la máquina.


### Configuración
La plataforma de desarrollo debe respetar **siempre** estos elementos de configuración, caso contrario se generarán problemas de consistencia y/o despliegue.
```js
  onBrokenLinks: 'throw', 
  onBrokenMarkdownLinks:'throw', 
```

### Instalación

```
yarn
```

### Desarrollo local

#### Generar documentación a partir de especificaciones OpenAPI

Las especificacones de OpenAPI se deben de repositar en la ruta `api-catalog/openapi`

Para compilar la documentación de openapi podemos ejecutar:
```
yarn gen-api-docs
```

Para limpiar la documentación generada podemos ejecutar:

```
yarn clean-api-docs
```

#### Levantar site para desarrollo

```
yarn start
```

Este comando arranca un servidor de desarrollo local y abre un navegador con el portal. La mayoría de los cambios se reflajan en el navegador sin necesidad de reiniciar el servidor.

### Construir el portal para producción

```
yarn build
```

Este comando genera el contenido estático en el directorio `build` y podrá ser servido por cualquier hosting de estáticos.

### Despliegue

Se recomienda desplegar el portal en un hosting de estáticos o CDN, sin embargo se proporcionan otros mecanismos para probar la construccón del portal en local

#### Servir el portal productivo en local

```
yarn serve
```
