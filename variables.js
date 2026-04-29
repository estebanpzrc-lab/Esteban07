let nombreProducto = "Monitor"; // Variable para almacenar el nombre del producto
let precioProducto = 1200; // Variable para almacenar el precio del producto
const igv = 0.18; // Variable constante para almacenar el valor del IGV (Impuesto General a las Ventas)

let precioFinal = precioProducto + (precioProducto * igv); // Cálculo del precio final incluyendo el IGV

let mensaje = `El precio final del ${nombreProducto} es: ${precioFinal}`;

console.log(mensaje);
    