// -- Manejo de Navegacion ---------------------------------------------------------
// ---------------------------------------------------------------------------------
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
            $('.contenedor').load("./componente/links.html", () => {
                getLinks();
            });
            break;
        case 4:
            $(".contenedor").load("./componente/contacto.html .contacto");
            break;
    }

    // -- Si se linkea una pagina y el menu hamburguesa esta visible, se ocultara
    var btnMenu_click = document.querySelector(".navBar-btn");
    if (window.getComputedStyle(btnMenu_click).display != "none") {
        btnMenu()
    }
}

// -- Manejo de Navegacion - Render Carrusel (Tienda -------------------------------
// ---------------------------------------------------------------------------------
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

// -- Manejo de Navegacion - Render Links (Paltas) ---------------------------------
// ---------------------------------------------------------------------------------
function getLinks() {
    var listaLinks = document.querySelector(".links");
    var newElement = '<a href="#" class="list-group-item list-group-item-action active" aria-current="true">Links Útiles</a>';

    dataLinks.map((d, index) => {
        newElement = newElement + '<a key=' + d.id + ' href=' + d.url + ' target="_blank" class="list-group-item list-group-item-action">' + d.nombre + '</a>';
    });

    listaLinks.innerHTML = newElement;
}

// -- Manejo btn Menu Hamburguesa --------------------------------------------------
// ---------------------------------------------------------------------------------
let navBarBtn_click = true;

function btnMenu() {
    var navBarBtn = document.querySelector(".navBar-btn").children;
    var navBarMenu = document.querySelector(".navBar-menu");

    if (navBarBtn_click) {
        for (i=0; i<navBarBtn.length; i++){
            navBarBtn[i].classList.add("navBar-btn_div_accion");
        }
        navBarMenu.classList.add("navBar-menu_accion");
        navBarBtn_click = false;
    }else{
        for (i=0; i<navBarBtn.length; i++){
            navBarBtn[i].classList.remove("navBar-btn_div_accion");
        }
        navBarMenu.classList.remove("navBar-menu_accion");
        navBarBtn_click = true;
    }
}

// -- Reloj ------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
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

// -- Manejo de Mensajeria ---------------------------------------------------------
// ---------------------------------------------------------------------------------
function msge(btn_clic) {
    let modal = document.querySelector(".modal-body");
    let msg = "";

    console.dir(btn_clic.id);

    if (btn_clic.id == "btnEncuesta"){
        msg = msge_Encuesta();
    }else if (btn_clic.id == "btnContacto"){
        msg = msge_Contacto();
    }

    modal.innerHTML = msg;
}

function msge_Encuesta() {
    let txtEncuesta = document.querySelector("#txtEncuesta");
    let txt = "";

    if (isNaN(txtEncuesta.value) || txtEncuesta.value == ''){
        txt = "Debe Ingresar una Valor Numérico";
        $(txtEncuesta).css('border-color', 'red'); 
    }else{
        if (txtEncuesta.value > 10) {
            txt = "El Valor Debe ser Entre 0 y 10";
            $(txtEncuesta).css('border-color', 'red'); 
        }else{
            txt = "Gracias por Darnos tu Opinión";
            txtEncuesta.value = "";
        }       
    }

    return txt
};

function msge_Contacto() {
    let txtEmail = document.querySelector("#txtContactoEmail");
    let txtNombre = document.querySelector("#txtContactoNombre");
    let txt = "";

    console.log(txtEmail.value);

    if (txtEmail.value == ""){
        txt = "Debe Ingresar un EMail";
    }else{
        if (txtNombre.value == "") {
            txt = "Debe Ingresar su Nombre";
        }else{
            txt = "Gracias por Contactarnos!!!";
            txtEmail.value = "";
            txtNombre.value = "";
        }
    }

    return txt;
}

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
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

 