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
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";
    
    productos.forEach(producto => {
         
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
    `;
        contenedorProductos.append(div);
        
    })
}

cargarProductos();

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {

        }
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
    })
})

