console.log("hola probando el JS")
// 1. Definimos el arreglo de meriendas
const meriendas = [    
    "Americano + Tostado",
    "Latte + Galletas",
    "Cafe Moca + Cruasán",
    "Cafe del dia + Medialunas rellena de JYQ",
    "Latte helado + 2 Medialunas"
];

// 2. Capturamos el contenedor del HTML e insertamos una lista ordenada <ol>
const contenedor = document.getElementById('ListMerienda');
const listaOl = document.createElement("ol");
contenedor.appendChild(listaOl);

// 3. Recorremos el arreglo con forEach para agregar cada ítem (li)
let contador = 0;

meriendas.forEach(merienda => {
    const nuevaMerienda = document.createElement("li"); // Usamos 'li' para los elementos de la lista
    nuevaMerienda.textContent = merienda;
    listaOl.appendChild(nuevaMerienda);
    
    contador++; // Sumamos al contador
});

// 4. Capturamos el botón y el párrafo usando los ID EXACTOS de tu HTML
const botCont = document.getElementById("BotCont");
const conteoTexto = document.getElementById("Conteo");

// 5. Agregamos el evento al botón
botCont.addEventListener("click", () => {
    conteoTexto.textContent = "Cantidad de meriendas: " + contador;
    console.log(contador); 
});