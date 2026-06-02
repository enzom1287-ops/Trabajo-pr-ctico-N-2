const Peliculas = [
    {
        peli: "Memoir of a murder",
        datos: "118min   2017   7.2", // Sin barras ni estrellas
        genero: "Action • Crime • Mystery"
    },
    {
        peli: "No country for old men",
        datos: "122min   2007   8.2",
        genero: "Crime • Drama • Thriller"
    },
    {
        peli: "Blade runner 2049",
        datos: "164min   2017   8.0",
        genero: "Action • Drama • Sci-Fi"
    },
    {
        peli: "F1 The movie",
        datos: "156min   2025   7.6",
        genero: "Action • Drama • Sport"
    }
];

const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorSelecciones = document.getElementById("contenedorSelecciones");
const contadorTexto = document.createElement("h4");

// Inicializar el contador en la caja derecha desde el principio
contenedorSelecciones.appendChild(contadorTexto);

// Generar las cajas dinámicamente
Peliculas.forEach(item => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
        <h2>${item.peli}</h2>
        <h4>${item.datos}</h4>
        <h4><strong>Género:</strong> ${item.genero}</h4>
    `;

    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("seleccionado");
        actualizarContador();
    });

    contenedorTarjetas.appendChild(tarjeta);
});

// Función para actualizar solo el número de manera sólida
function actualizarContador() {
    const cantidadSeleccionados = document.querySelectorAll(".tarjeta.seleccionado").length;
    contadorTexto.textContent = `Seleccionadas: ${cantidadSeleccionados}`;
}

// Ejecución inicial para mostrar el cero
actualizarContador();