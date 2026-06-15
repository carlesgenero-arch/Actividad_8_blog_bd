# API BLOG

## obtención autores

Method : GET
URL:/api/autores
Headers:XXXX
Body: XXXX

Respuesta: Array todos los clientes (JSON)

## obtención posts

Method : GET
URL:/api/autores
Headers:XXXX
Body: XXXX

Respuesta: Array todos los posts (JSON)

## creación de los autores 

Method: POST
URL: /api/autores
Headers: XXXX
Body: 
    -nombre, email, imagen

Respuesta:
- 201 --> OK, s'ha creado un recurso + datos nuevo autor (JSON)

## creación de los posts 

Method: POST
URL: /api/posts
Headers: XXXX
Body: 
    -titulo, descripción, fecha creación, categoria

Respuesta:
- 201 --> OK, s'ha creado un recurso + datos nuevo autor (JSON)


## Cada post recuperado viene con datos del autor



## diferentes posts escritos por un autor