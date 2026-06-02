console.log("hola probando el JS")
// 1. Definimos el arreglo de peliculas
const peliculas = [
    { titulo: "Inception", director: "Christopher Nolan", anio: 2010, genero: "Ciencia ficción" },
    { titulo: "El Padrino", director: "Francis Ford Coppola", anio: 1972, genero: "Drama" },
    { titulo: "Interstellar", director: "Christopher Nolan", anio: 2014, genero: "Ciencia ficción" },
    { titulo: "Pulp Fiction", director: "Quentin Tarantino", anio: 1994, genero: "Thriller" },
    { titulo: "Forrest Gump", director: "Robert Zemeckis", anio: 1994, genero: "Drama" },
    { titulo: "Matrix", director: "Lana y Lilly Wachowski", anio: 1999, genero: "Acción" }
];

// 2. Capturamos los contenedores del HTML
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contenedorSelecciones = document.getElementById('contenedorSelecciones');

// 3. Contador de selecciones
let cantidadSeleccionadas = 0;

// 4. Actualizamos el panel lateral
function actualizarContador() {
    contenedorSelecciones.innerHTML = '<h4>Películas seleccionadas: ' + cantidadSeleccionadas + '</h4>';
}

// 5. Recorremos el arreglo y creamos una tarjeta por cada película
peliculas.forEach(pelicula => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
        <h2>${pelicula.titulo}</h2>
        <h4>Director: ${pelicula.director}</h4>
        <h4>Año: ${pelicula.anio}</h4>
        <h4>Género: ${pelicula.genero}</h4>
    `;

    // Al hacer click en la tarjeta se selecciona/deselecciona
    tarjeta.addEventListener("click", () => {
        if (tarjeta.classList.contains("seleccionado")) {
            tarjeta.classList.remove("seleccionado");
            cantidadSeleccionadas--;
        } else {
            tarjeta.classList.add("seleccionado");
            cantidadSeleccionadas++;
        }
        actualizarContador();
    });

    contenedorTarjetas.appendChild(tarjeta);
});

// 6. Inicializamos el contador en el panel lateral
actualizarContador();