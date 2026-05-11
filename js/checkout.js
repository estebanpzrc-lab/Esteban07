// ===============================
//   CARGAR CARRITO DESDE STORAGE
// ===============================
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ===============================
//   ACTUALIZAR CONTADOR DEL CARRITO
// ===============================
function actualizarContador() {
    const contador = document.getElementById("contadorCarrito");
    if (!contador) return;
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contador.textContent = carrito.length;
}

// Mostrar contador al cargar la página
actualizarContador();

// ===============================
//   AGREGAR PRODUCTO AL CARRITO
// ===============================
function agregarAlCarrito(nombre, precio, imagen) {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre: nombre,
        precio: Number(precio),
        imagen: imagen
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    alert("Propiedad agregada al carrito");
}

// ===============================
//   REFERENCIAS DEL CARRITO (SOLO EN carrito.html)
// ===============================
const contenedor = document.getElementById("carritoItems");
const subtotalSpan = document.getElementById("subtotal");
const totalSpan = document.getElementById("total");

// ===============================
//   MOSTRAR PRODUCTOS EN EL CARRITO
// ===============================
function mostrarCarrito() {
    if (!contenedor) return; // No estás en carrito.html

    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    contenedor.innerHTML = "";
    let subtotal = 0;

    carrito.forEach((item, index) => {
        subtotal += Number(item.precio);

        contenedor.innerHTML += `
            <div class="carrito-item">
                <img src="${item.imagen}">
                <div class="carrito-info">
                    <h3>${item.nombre}</h3>
                    <p>Precio: S/ ${item.precio}</p>
                </div>
                <button class="btn-eliminar" onclick="eliminar(${index})">Eliminar</button>
            </div>
        `;
    });

    if (subtotalSpan && totalSpan) {
        subtotalSpan.textContent = subtotal;
        totalSpan.textContent = subtotal;
    }
}

if (contenedor) {
    mostrarCarrito();
}

// ===============================
//   ELIMINAR PRODUCTO
// ===============================
function eliminar(i) {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(i, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    actualizarContador();
}

// ===============================
//   CAMBIAR MÉTODO DE PAGO
// ===============================
const metodoPagoSelect = document.getElementById("metodoPago");
if (metodoPagoSelect) {
    metodoPagoSelect.addEventListener("change", (e) => {
        const metodo = e.target.value;

        document.getElementById("formTarjeta").classList.add("hidden");
        document.getElementById("formYape").classList.add("hidden");

        if (metodo === "tarjeta") {
            document.getElementById("formTarjeta").classList.remove("hidden");
        } else {
            document.getElementById("formYape").classList.remove("hidden");
        }
    });
}

// ===============================
//   FINALIZAR COMPRA (MODO DEMO)
// ===============================
const btnPagar = document.getElementById("btnPagar");
if (btnPagar) {
    btnPagar.addEventListener("click", () => {

        const nombre = document.getElementById("nombre").value;
        const direccion = document.getElementById("direccion").value;
        const telefono = document.getElementById("telefono").value;
        const metodo = document.getElementById("metodoPago").value;

        carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        if (!nombre || !direccion || !telefono) {
            alert("Completa todos los datos del comprador");
            return;
        }

        if (carrito.length === 0) {
            alert("Tu carrito está vacío");
            return;
        }

        alert(`Compra realizada con éxito usando ${metodo.toUpperCase()} (modo demo)`);
    });
}


