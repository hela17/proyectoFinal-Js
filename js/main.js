// PRODUCTOS

const productos = [
    // Gin
    {
        id: "gin-01",
        titulo: "Gin Bosque",
        imagen: "./img/gin/gin-bosque01.jpg",
        categoria: {
            nombre: "Gin",
            id: "gines"
        },
        precio: 2500
    },
    {
        id: "gin-02",
        titulo: "Gin Aconcagua",
        imagen: "./img/gin/gin-aconcagua01.jpg",
        categoria: {
            nombre: "Gin",
            id: "gines"
        },
        precio: 2500
    }
]


    //********************/
let contenedorProductos = document.getElementById("contenedor-productos")

let carrito = []

productos.forEach((producto)=>{
    
    let contenedor = document.createElement("div")
    contenedor.className = "producto-detalles"
    contenedor.innerHTML = `
    <h3>${producto.titulo}</h3>
    <p>${producto.precio}</p>
    `;

    contenedorProductos.append(contenedor)

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar"
    comprar.className = "producto-agregar"

    contenedor.append(comprar)


    comprar.addEventListener("click", () => {
        
        console.log("hola boton")
        
        carrito.push(
            {
            id: producto.id,
            titulo: producto.titulo,
            precio: producto.precio
            }
        )
        
            console.log(carrito)
        })
})

let verCarrito = document.getElementById("contenedor-carrito")

verCarrito.addEventListener("click", () => {
    
    console.log("hola carrito")

    const modalHeader = document.createElement("div")
    modalHeader.innerHTML = `
        <h1>Carrito </h1>
        `;
    
    
    verCarrito.append(modalHeader)

    carrito.forEach((producto) => {
        
        let carritoContent = document.createElement("div")
        carritoContent.innerHTML = `
            <small class="carrito-producto-titulo">Titulo</small>
            <h3 class="carrito-producto-titulo">${producto.titulo}</h3>
            `;
        
        verCarrito.append(carritoContent)
    })
})


// const contenedorProductos = document.querySelector("#contenedor-productos");
// const botonesCategorias = document.querySelectorAll(".boton-categorias");

// function cargarProductos(productosElegidos) {

//     contenedorProductos.innerHTML = "";
    
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

