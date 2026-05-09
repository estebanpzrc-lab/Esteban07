document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Evita que la página se recargue automáticamente al enviar el formulario
    event.preventDefault(); 

    // Capturamos los valores que el usuario escribió
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPass').value;

    // Validación básica para asegurar que no estén vacíos
    if(email !== "" && password !== "") {
        
        // Guardamos el correo en el LocalStorage para simular una sesión abierta
        localStorage.setItem('usuarioLogueado', email);
        
        // Mostramos un mensaje de éxito
        alert("¡Bienvenido, " + email + "!");
        
        // Redirigimos a la página principal (asegúrate de que index.html exista en tu carpeta raíz)
        window.location.href = 'index.html';
        
    } else {
        alert("Por favor, completa todos los campos.");
    }
});