// PRODUCTOS

// const productos = [
//     // Gin
//     {
//         id: "gin01",
//         titulo: "Gin Bosque",
//         imagen: "./img/gin/gin-bosque01.jpg",
//         categoria: {
//             nombre: "Gin",
//             id: "gines"
//         },
//         precio: 2500
//     },
//     {
//         id: "gin02",
//         titulo: "Gin Aconcagua",
//         imagen: "./img/gin/gin-aconcagua01.jpg",
//         categoria: {
//             nombre: "Gin",
//             id: "gines"
//         },
//         precio: 2500
//     },
//      {
//         id: "fernet01",
//         titulo: "Fernet Branca",
//         imagen: "./img/gin/gin-aconcagua01.jpg",
//         categoria: {
//             nombre: "Fernet",
//             id: "fernet"
//         },
//         precio: 1850
//     }
//       {
//         id: "vermu01",
//         titulo: "Vermú Carpano",
//         imagen: "./img/gin/gin-aconcagua01.jpg",
//         categoria: {
//             nombre: "Vermu",
//             id: "Vermu"
//         },
//         precio: 1000
//     },
//    {
//         id: "vermu02",
//         titulo: "Vermú Lunfa",
//         imagen: "./img/gin/gin-aconcagua01.jpg",
//         categoria: {
//             nombre: "Vermu",
//             id: "Vermu"
//         },
//         precio: 2400
//     }


// EJEMPLO - ALMACENAR ARRAY DE OBJETOS

const productos = [{ id: 1, producto: "Arroz", precio: 125 }, { id: 2, producto: "Fideo", precio: 70 }, { id: 3, producto: "Pan", precio: 50 }, { id: 4, producto: "Flan", precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//console.log(productos);

for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
    }















//     //********************/
// let contenedorProductos = document.getElementById("contenedor-productos")
// const verCarrito = document.getElementById("contenedor-carrito")
// console.log(verCarrito)

// let carrito = []

// productos.forEach((producto)=>{
    
//     let contenedor = document.createElement("div")
//     contenedor.className = "producto-detalles"
//     contenedor.innerHTML = `
//     <h3>${producto.titulo}</h3>
//     <p>${producto.precio}</p>
//     `;

//     contenedorProductos.append(contenedor)

//     let comprar = document.createElement("button")
//     comprar.innerText = "Comprar"
//     comprar.className = "producto-agregar"

//     contenedor.append(comprar)


//     comprar.addEventListener("click", () => {
        
//         console.log("hola boton")
        
//         carrito.push(
//             {
//             id: producto.id,
//             titulo: producto.titulo,
//             precio: producto.precio
//             }
//         )
        
//             console.log(carrito)
//         })
// })

// let verCarrito = document.getElementById("contenedor-carrito")

// verCarrito.addEventListener("click", () => {
    
//     console.log("hola carrito")

//     const modalHeader = document.createElement("div")
//     modalHeader.innerHTML = `
//         <h1>Carrito </h1>
//         `;
    
    
//     verCarrito.append(modalHeader)

//     carrito.forEach((producto) => {
        
//         let carritoContent = document.createElement("div")
//         carritoContent.innerHTML = `
//             <small class="carrito-producto-titulo">Titulo</small>
//             <h3 class="carrito-producto-titulo">${producto.titulo}</h3>
//             `;
        
//         verCarrito.append(carritoContent)
//     })
// })

// localStorage

// localStorage.setItem('bienvenido', '¡Bienvenido!');
// localStorage.setItem('hela' , 'Sos el hela?')
// let mensaje = localStorage.getItem('bienvenido');
// let pinocho = localStorage.getItem('hela');
// console.log(mensaje);
// console.log(pinocho);

// localStorage.setItem('saborX','mentaGranizada');

// let saborXjuan = localStorage.getItem('saborX');

// alert("Juan perez eligio: " + saborXjuan);

// // Recorriendo el storage

// console.log("+++++LocalStorage+++++");


// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));
// }
// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));
// }

// const contenedorProductos = document.querySelector("#contenedor-productos");

//     productos.forEach(producto => {
         
//         const div = document.createElement("div");
//         div.classList.add("producto");
//         div.innerHTML = `
//             <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
//             <div class="producto-detalles">
//                 <h3 class="producto-titulo">${producto.titulo}</h3>
//                 <p class="producto-precio">${producto.precio}</p>
//                 <button class="producto-agregar" id="${producto.id}">Agregar</button>
//             </div>
//     `;
//         contenedorProductos.append(div);
        
//     })
// }

// cargarProductos();

// botonesCategorias.forEach(boton => {
//     boton.addEventListener("click", (e) => {
        
//         botonesCategorias.forEach(boton => boton.classList.remove("active"));
//         e.currentTarget.classList.add("active");

//         if (e.currentTarget.id != "todos") {

//         }
//         const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
//         cargarProductos(productosBoton);
//     })
// })


