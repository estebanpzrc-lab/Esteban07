// ===============================
// CARRITO PARA DECORACIONES
// ===============================

// Si no existe carrito en localStorage, lo crea
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar decoraciones al carrito
function agregarAlCarrito(nombre, precio, imagen) {

    const producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        cantidad: 1
    };

    // Verificar si ya existe en el carrito
    const existente = carrito.find(item => item.nombre === nombre);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push(producto);
    }

    // Guardar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar contador
    actualizarContadorCarrito();

    alert("Producto agregado al carrito");
}

// Actualiza el número del carrito en el header
function actualizarContadorCarrito() {
    const contador = document.getElementById("contadorCarrito");
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contador.textContent = total;
}

// Ejecutar contador al cargar la página
actualizarContadorCarrito();
