# Bienvenido a mi proyecto, Art&Air

Hola, soy Lucas Ramos, este es mi proyecto creado para el curso de React JS de Coderhouse. Hice una tienda virtual funcional de venta de articulos de arte. Aplique todo lo aprendido en el curso y conocimientos adquiridos de manera individual para siempre intentar mejorar mi proyecto. 



## Construido con

 - Vite
 - Html
 - Css
 - React Js
 - Boostrap
 - React Router
 - Context
 - Firebase / Firestore Database

## Iniciar el proyecto
Para clonar e iniciar este repositorio se necesita tener instaladas las tecnologias **Git** y **Node.js**, que traen la herramienta **npm**.
```bash
# Clone this repository
$ git clone https://github.com/LucasEzequielBecerra/ArtAir.git
 
OR

#Download ZIP

# Go into the repository
$ cd ArtAir

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

## Componentes en proyecto

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|Componentes| Descripcion  |
|--|--|
|CkeckoutCart|Componente donde se renderiza el formulario de compra y se ejecuta la funcion de la base de datos.|
|CheckoutForm|Formulario de validacion para finalizar la compra, crear la orden y almacenarla en la base de datos.|
|Carousel |Este componente trae un carrusel de imagenes y se usa en el componente ***Home***. Se implementa uso de la libreria Swiper.js.
Counter| Este componente es un contador que reasigna el valor de la propiedad *quantity* en cada item de mi lista de items.|
|Cart|Estructura de item que se va a presentar en el ***CartContainer***.|
|CartContainer|Contenedor de items, con imagenes, titulos y precio. Paso previo a finalizar la compra, mostrando resumen de productos elegidos.|
|cartContext|Archivo con funciones logicas para usar en el carrito y el formulario de compra. Contiene tambien el proveedor.|
|CartWidget|Componente que contiene el item del cart widget y el contador de cantidad de items .|
|Description|Archivo donde se encuentra la descripcion de "Novedades" y "Ofertas" .|
|Footer|Pie de pagina con informacion de redes.|
|firestore|Archivo con configuracion y funciones a exportar de la base de datos.|
|Home|Componente donde se renderiza el Carousel y las secciones de la pagina web "Novedades" y "Ofertas".|
|ItemDetail|Estructura del detalle de producto.|
ItemDetailContainer|Contenedor de la informacion del producto, donde se encuentran las funciones para agregar al carrito .|
Item|Estructura de las cards que se muestran en ItemListContainer.|
|ItemList| Generador de cards, usando ***Item*** e iterando con la informacion obtenida de la base de datos.|
|ItemListContainer|Contenedor de las cards donde se encuentras las funciones logicas para filtrar y mostrar por sus distintas propiedades.|
|Loader|Compononente utilizado en pantalla de carga, para generar un entorno mas agradable con el usuario mientras se espera el renderizado.|
|NavBar|Header con nav (categorías y secciones), menú hamburguesa, buscador de productos integrado, acceso al cart.|
|NotFound|Si se pasa una ruta inválida, muestra el 404 error pero con estilo y la posibilidad de uso del header.|
|Section| Componente que renderiza condicionalmente el contenido visto en ***Home*** segun la url|


## Dependencias utilizadas
- Swiper.js: Implemento de libreria en ***Carousel***, utilizada en componente ***Home***.
- SweetAlert: Alertas en agregado de items al carrito y en el flujo de compra y en errores de firebase.
- Ract Icons: Iconos.
- @uiball/loaders: Implemento en ***Loader*** para espera de carga.
- Boostrap: Maquetacion y estilacion en ciertas partes del proyecto.
