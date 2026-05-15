// ===============================
// CARRITO PARA DECORACIONES
// ===============================

// Función para agregar decoraciones al carrito
function agregarAlCarrito(nombre, precio, imagen) {

    // Cargar SIEMPRE el carrito actualizado
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Buscar si ya existe
    const existente = carrito.find(item => item.nombre === nombre);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        });
    }

    // Guardar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar contador
    actualizarContadorCarrito();

    alert("Producto agregado al carrito");
}

// Actualiza el número del carrito en el header
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById("contadorCarrito").textContent = total;
}

// Ejecutar contador al cargar la página
actualizarContadorCarrito();
