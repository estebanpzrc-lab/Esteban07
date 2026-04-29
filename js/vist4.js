
// 1. SELECCIONAR: Le decimos a JS que busque los elementos en el HTML usando sus IDs
const campoNombre = document.getElementById('nombreCliente');
const boton = document.getElementById('botonEnviar');

// 2. ESCUCHAR: Le decimos al botón que preste atención cuando alguien le haga "click"
boton.addEventListener('click', function(evento) {
    
    // Evitamos que la página se recargue (comportamiento por defecto de los formularios)
    evento.preventDefault();
    
    // 3. EJECUTAR: Capturamos el texto que el usuario escribió en el input
    const nombreIngresado = campoNombre.value;
    
    // Validamos que el campo no esté vacío
    if (nombreIngresado === "") {
        alert('Por favor, ingresa tu nombre antes de enviar.');
    } else {
        // Mostramos un mensaje personalizado
        alert('¡Gracias ' + nombreIngresado + '! Un asesor de la inmobiliaria se contactará contigo pronto.');
        
        // Opcional: Limpiamos el campo después de enviar
        campoNombre.value = "";
    }
});