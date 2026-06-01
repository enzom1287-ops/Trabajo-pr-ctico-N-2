const Merienda = [    
    "Americano + Tostado",
    "Latte + Galletas",
    "Cafe Moca + Cruasán",
    "Cafe del dia + Medialunas rellena de JYQ",
    "Latte helado + 2 Medialunas"
];

function ListaOrdenada() {
    const contenedor = document.getElementById('ListMerienda');

    const ol = document.createElement('ol');
    ol.className = "Lista-de-merienda";

    Merienda.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ol.appendChild(li);
    });

    contenedor.appendChild(ol);   // ← Corregido
}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', ListaOrdenada);