function cargarComponente(id) {
    switch (id){
        case 1 :
            $(".contenedor").load("./componente/tienda.html #carrusel");
            // $('.contenedor').load("./componente/tienda.html", function() {
            //     getCarruselItem();
            // });
            break;
        case 2:
            $(".contenedor").load("./componente/encuesta.html .encuesta");
            break;
        case 3:
            $('.contenedor').load("./componente/links.html", function() {
                getLinks();
            });
            break;
        case 4:
            $(".contenedor").load("./componente/contacto.html .contacto");
            break;
    }
}

function getCarruselItem() {
    var listaCarrusel = document.querySelector("#galeria");
    var newElement = "";

    dataProductos.map((d, index) => {
        newElement = newElement + '<div class="gallery-cell">';
        newElement = newElement + '<div class="cont_libro_sup"> <img src="' + d.url + '" alt=""> </div>';
        newElement = newElement + '<div class="cont_libro_back">';
        newElement = newElement + '<div class="cont_detalles_lib">';
        newElement = newElement + '<h4>' + d.nombre + '</h4>';
        newElement = newElement + '<p>' + d.descripcion + '</p><br>';
        newElement = newElement + '<h3 class="precio">$' + d.precio + '</h3>';
        newElement = newElement + '<p class="sub_precio"><s>$10.000</s></p></div>';
        newElement = newElement + '<div class="cont_btn_buy"> <a href="#">COMPRA AHORA</a></div></div></div>';
    });

    listaCarrusel.innerHTML = newElement;
}

function getLinks() {
    var listaLinks = document.querySelector(".links");
    var newElement = '<a href="#" class="list-group-item list-group-item-action active" aria-current="true">Links Útiles</a>';

    dataLinks.map((d, index) => {
        newElement = newElement + '<a key=' + d.id + ' href=' + d.url + ' target="_blank" class="list-group-item list-group-item-action">' + d.nombre + '</a>';
    });

    listaLinks.innerHTML = newElement;
}

function reloj() {
    var hora = new Date;
    var reloj = document.querySelector(".reloj");
    var htmlHora = hora.getHours() + " h · " + hora.getMinutes() + " m · " + hora.getSeconds() + " s";

    if (htmlHora != null) {
        reloj.innerHTML = '<div>' + htmlHora + '</div>';
    };
};

setInterval(() => {
    reloj();
}, 1000);

let scrY = window.scrollY;

window.addEventListener("scroll", () => {
    let navBar = document.querySelector("header")

    if (scrY < window.scrollY) {
        navBar.classList.add("nav-oculto");
    } else {
        navBar.classList.remove("nav-oculto");
    }

    scrY = window.scrollY;
});
