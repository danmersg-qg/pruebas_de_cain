function mostrarcontenidoModal(condicional) {
    const tituloModal = document.getElementById("txttitulomodal");
    const contenidoModal = document.getElementById("txtcontenidomodal");

    if (!tituloModal || !contenidoModal) return;

    if (condicional === "1") {
        tituloModal.textContent = "Título Modal 1";
        contenidoModal.textContent = "Contenido del Modal 1";
    } else if (condicional === "2") {
        tituloModal.textContent = "Título Modal 2";
        contenidoModal.textContent = "Contenido del Modal 2";
    }
}

const lista = [];

function AgregarElemento(producto, precio) {
    lista.push({ Producto: producto, Precio: precio });
    MostrarLista();
}

function MostrarLista() {
    const mostrar = document.getElementById("listadoProducto");
    if (!mostrar) return;

    mostrar.replaceChildren();

    lista.forEach((item, index) => {
        const columna = document.createElement("div");
        columna.className = "col-12 col-md-3";

        const tarjeta = document.createElement("div");
        tarjeta.className = "card mb-2";

        const cuerpo = document.createElement("div");
        cuerpo.className = "card-body";

        const nombre = document.createElement("strong");
        nombre.textContent = item.Producto;

        const precio = document.createElement("span");
        precio.className = "badge text-bg-success";
        precio.textContent = item.Precio;

        const quitar = document.createElement("button");
        quitar.type = "button";
        quitar.className = "btn btn-danger mt-3";
        quitar.textContent = "Quitar producto";
        quitar.addEventListener("click", () => QuitarProducto(index));

        cuerpo.append("Producto: ", nombre, document.createElement("br"),
                      "Precio: ", precio, document.createElement("br"), quitar);
        tarjeta.appendChild(cuerpo);
        columna.appendChild(tarjeta);
        mostrar.appendChild(columna);
    });
}

function QuitarProducto(index) {
    lista.splice(index, 1);
    MostrarLista();
}
