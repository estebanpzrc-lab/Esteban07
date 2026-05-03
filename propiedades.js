const propiedades = [
  {
    imagen: "img/propiedades/propiedad 1.jpg",
    titulo: "Casa Condominio - San Juan de Lurigancho",
    ubicacion: "Casa residencial",
    precio: "S/ 22.050.000",
    detalles: "2 cuartos · 2 suítes · 3 garages",
    disponible: true
  },
  {
    imagen: "img/propiedades/propiedad 2.jpg",
    titulo: "Casa Condominio - Barranco",
    ubicacion: "Casa residencial",
    precio: "S/ 25.850.000",
    detalles: "2 cuartos · 2 suítes · 3 garages",
    disponible: true
  },
  {
    imagen: "img/propiedades/propiedad 3.jpg",
    titulo: "Casa Condominio - Miraflores",
    ubicacion: "Casa residencial",
    precio: "S/ 30.800.000",
    detalles: "2 cuartos · 2 suítes · 3 garages",
    disponible: true
  },
  {
    imagen: "img/propiedades/propiedad 4.jpg",
    titulo: "Casa Condominio - Lince",
    ubicacion: "Casa residencial",
    precio: "S/ 35.250.000",
    detalles: "2 cuartos · 2 suítes · 3 garages",
    disponible: false
  },
  {
    imagen: "img/propiedades/propiedad 5.jpg",
    titulo: "Casa Lujosa - Presidente Prudente",
    ubicacion: "Parque Residencial Dahma III",
    precio: "R$ 37.250.000",
    detalles: "2 banheiros · 2 suítes · 3 garagens",
    disponible: true
  },
  {
    imagen: "img/propiedades/propiedad 6.jpg",
    titulo: "Casa en Condomínio - La Planicie",
    ubicacion: "Parque Residencial Dahma III",
    precio: "R$ 40.250.000",
    detalles: "2 banheiros · 2 suítes · 3 garagens",
    disponible: true
  },
  {
    imagen: "img/propiedades/propiedad 7.jpg",
    titulo: "Casa en Condomínio - Lima Centro",
    ubicacion: "Parque Residencial Dahma III",
    precio: "R$ 45.250.000",
    detalles: "2 banheiros · 2 suítes · 3 garagens",
    disponible: false
  },
  {
    imagen: "img/propiedades/propiedad 8.jpg",
    titulo: "Casa en Tacna - Ciudad Nueva",
    ubicacion: "Parque Residencial Dahma III",
    precio: "R$ 47.250.000",
    detalles: "2 banheiros · 2 suítes · 3 garagens",
    disponible: true
  }
];

function renderPropiedades() {
  const grid = document.getElementById("propiedades-grid");

  propiedades.forEach(prop => {
    const card = document.createElement("div");
    card.classList.add("prop-card");

    card.innerHTML = `
      <img src="${prop.imagen}" alt="${prop.titulo}">
      <div class="prop-info">
        <h3>${prop.titulo}</h3>
        <p class="prop-ubicacion">${prop.ubicacion}</p>
        <p class="prop-precio">${prop.precio}</p>
        <p class="prop-detalles">${prop.detalles}</p>
        <div class="prop-botones">
          <a href="#" class="prop-btn">Ver mas</a>
          <span class="prop-disponible ${prop.disponible ? 'disponible' : 'no-disponible'}">
            ${prop.disponible ? 'Disponible' : 'Vendido'}
          </span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

    function filtrar(tipo) {
  // Cambiar botón activo
  document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.classList.remove("activo");
  });
  event.target.classList.add("activo");

  // Filtrar cards
  const cards = document.querySelectorAll(".prop-card");
  cards.forEach(card => {
    const badge = card.querySelector(".prop-disponible");
    if (tipo === "todos") {
      card.style.display = "block";
    } else if (tipo === "disponible") {
      card.style.display = badge.classList.contains("disponible") ? "block" : "none";
    } else {
      card.style.display = badge.classList.contains("no-disponible") ? "block" : "none";
    }
  });
}

renderPropiedades();