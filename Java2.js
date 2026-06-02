var obras = [
    { titulo: "JoJo's Bizarre Adventure",      tipo: "manga" },
    { titulo: "Oyasumi Punpun",                tipo: "manga" },
    { titulo: "Vagabond",                      tipo: "manga" },
    { titulo: "Vinland Saga",                  tipo: "manga" },
    { titulo: "Juego de Tronos",                tipo: "libro" },
    { titulo: "Una Canción para Lya",           tipo: "libro" },
    { titulo: "El Regreso de Sherlock Holmes",  tipo: "libro" },
    { titulo: "La Ilíada y La Odisea",          tipo: "libro" }
];

function renderizar(lista) {
    var contenedor = document.getElementById('listado-libros');
    contenedor.innerHTML = '';

    lista.forEach(function(obra) {
        var div = document.createElement('div');
        div.className = 'tarjeta-libro';
        div.innerHTML = obra.titulo + '<span class="tipo">' + obra.tipo + '</span>';
        contenedor.appendChild(div);
    });

    document.getElementById('contador-resultado').textContent =
        'Mostrando ' + lista.length + ' obra(s)';
}

function filtrar(tipo) {
    document.getElementById('btn-todos').classList.remove('activo');
    document.getElementById('btn-manga').classList.remove('activo');
    document.getElementById('btn-libro').classList.remove('activo');

    if (tipo === 'todos') {
        document.getElementById('btn-todos').classList.add('activo');
    } else if (tipo === 'manga') {
        document.getElementById('btn-manga').classList.add('activo');
    } else {
        document.getElementById('btn-libro').classList.add('activo');
    }

    var resultado = (tipo === 'todos')
        ? obras
        : obras.filter(function(obra) { return obra.tipo === tipo; });

    renderizar(resultado);
}

// Carga inicial de elementos en pantalla
renderizar(obras);