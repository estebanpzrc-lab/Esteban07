let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id, nombre, precio, imagen) {
    carrito.push({ id, nombre, precio, imagen });
    guardarCarrito();
    actualizarContador();
}

function actualizarContador() {
    const contador = document.getElementById("contadorCarrito");
    if (contador) contador.textContent = carrito.length;
}

function abrirCarrito() {
    window.location.href = "carrito.html";
}

function mostrarCarritoEnPagina() {
    const lista = document.getElementById("listaCarritoPagina");
    const totalTexto = document.getElementById("totalCarritoPagina");

    if (!lista) return;

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${item.imagen}" class="carrito-img">
            <span>${item.nombre}</span>
            <span>S/ ${item.precio}</span>
        `;
        lista.appendChild(li);
        total += Number(item.precio);
    });

    totalTexto.textContent = total;
}

actualizarContador();
mostrarCarritoEnPagina();




