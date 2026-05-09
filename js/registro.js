document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Capturamos los datos del nuevo usuario
    const nombre = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPass').value;

    if(nombre !== "" && email !== "" && password !== "") {
        
        // Guardamos los datos simulando una base de datos local
        localStorage.setItem('usuarioRegistrado_Email', email);
        localStorage.setItem('usuarioRegistrado_Nombre', nombre);
        localStorage.setItem('usuarioRegistrado_Pass', password); // Nota: En un proyecto real, nunca se guarda la contraseña así.
        
        alert("¡Cuenta creada con éxito, " + nombre + "!\nAhora puedes iniciar sesión.");
        
        // Lo enviamos de vuelta al login para que ingrese con su nueva cuenta
        window.location.href = 'login.html';
        
    } else {
        alert("Por favor, completa todos los campos.");
    }
});