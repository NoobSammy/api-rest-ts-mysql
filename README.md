# REST API con Typescript 🟦 + MySQL 🐬

## Ejecutar

Transpilar Typescript:

```bash
tsc
```

Ejecutar app:

```bash
node dist/app
```

## API Endpoints

- localhost:`<port>/api/usuarios`
  - **GET** `/` Obtener todos los usuarios
  - **GET** `/:id` Obtener usuario por ID
  - **POST** `/` Crear usuario
  - **PUT** `/:id` Actualizar usuario
  - **DELETE** `/:id` Eliminar usuario
