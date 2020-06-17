
# Práctica de Node Básico realizada por Pamela Martínez.

# NodePop

Nodepop es un API con un front  para la visualización de anuncios


### Instalación

    Necesitamos  Node.js y base de datos MongoDB
    
    npm install


### Inicializar base de datos 

    npm run installDB

## Comenzar
   
    npm start


## API v1 

### Ver los anuncios 

[API V1](/apiv1/anuncios)

URL. http://localhost:3000/api/anuncios
Método. GET
**Result:** 
{
"_id": "5ee9f0d2b66ba81cd84c76bc",
"__v": 0,
"nombre": "Agua",
"venta": true,
"precio": 2,
"foto": "\\images\\anuncios\\agua.JPG",
"tags": [
"lifestyle",
"work"
]
},
{
"_id": "5ee9f0d2b66ba81cd84c76bb",
"__v": 0,
"nombre": "Coche",
"venta": false,
"precio": 80000,
"foto": "\\images\\anuncios\\coche.JPG",
"tags": [
"motor"
]
},
{
"_id": "5ee9f0d2b66ba81cd84c76bd",
"__v": 0,
"nombre": "Moto",
"venta": false,
"precio": 1635,
"foto": "\\images\\anuncios\\moto.JPG",
"tags": [
"motor"
]
},
{
"foto": null,
"_id": "5ee9f0d2b66ba81cd84c76be",
"__v": 0,
"nombre": "Sansung",
"tags": [
"mobile",
"work"
]
},
{
"_id": "5ee9f0d2b66ba81cd84c76ba",
"__v": 0,
"nombre": "Vino",
"venta": true,
"precio": 7.5,
"foto": "\\images\\anuncios\\vino.JPG",
"tags": [
"lifestyle"
]
}

#### Visualizando un solo anuncio por ID

Request URL: http://localhost:3000/apiv1/anuncios/5ee9e96faf45b820f0ef6f74
Método: GET



#### Visualizando tags disponibles
Request URL: http://localhost:3000/apiv1/anuncios/tags
Request Method: GET
**Result:** 

   {
    "ok": true,
    "allowedTags": [
    "work",
    "lifestyle",
    "motor",
    "mobile"
  ]
}


## Filtros disponibles

#### nombre
```bash
Request URL: GET /apiv1/anuncios?name=name
Request Method: GET
```
####  precio
```bash
Request URL: GET /apiv1/anuncios?price='lowprice'-'highprice'
Request Method: GET
```
#### tag
```bash
Request URL: GET /apiv1/anuncios?tag=tag
Request Method: GET
```
####  estado
```bash
Request URL: GET /apiv1/anuncios?sell='true->Venta' or 'false-> compra'
Request Method: GET
```
####  limite de anuncios
```bash
Request URL: GET /apiv1/anuncios?limit=limit
Request Method: GET
Max without limit = 10
```
####  limite de anuncios
```bash
Request URL: GET /apiv1/anuncios?start=start
Request Method: GET
```
#### orden
```bash
Request URL: GET /apiv1/anuncios?sort=sort
Request Method: GET
Default sorted by '_id'