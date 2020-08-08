// INICIO

// VERIFICO EN STORAGE SI EXISTE EL NOMBRE DEL USUARIO
let nombre = localStorage.getItem("nombre");

// CREO OBJETO FECHA
let fecha = new Date();
let hora = fecha.getHours();

// SI EXISTE EL NOMBRE, LO SALUDAMOS
if(nombre !== null) {

    if(hora>23 && hora<7) {
        alert("Buenas madrugadas");
    }
    else if(hora>5 && hora<13) {
        alert("Buen día");
    }
    else if(hora>11 && hora<20) {
        alert("Buenas tardes");
    }
    else {
        alert("Buenas noches");
    }
}