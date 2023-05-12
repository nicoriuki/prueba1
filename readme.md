# API De Nicolas Marquez

## Configuración

Primero debemos crear un archivo en la raiz proyecto con el nombre `.env` con el siguiente contenido

```
NODE_PORT=8080
NODE_ENV=local
BASE_HOST=http://localhost:8080
```

Acá estamos configurando una variable de entorno para nuestro proyecto, en este caso el puerto que usará el servidor.

## Ejecutar en producción

```sh
npm start
```

## Ejecutar en Test

```sh
npm run test
```
