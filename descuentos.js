// INICIO

// OBTENEMOS DEL STORAGE EL NOMBRE DEL USUARIO
let nombreUsuario = localStorage.getItem("nombre");

// CREAMOS UN NUMERO ALEATORIO ENTRE MAX Y MIN
const MAX = 5;
const MIN = 1;
let numeroAleatorio = Math.floor(Math.random() * MAX) + MIN;

// DESCUENTOS
let arrayDescuentos = [
    "5HOTSALE para obtener un 5% de descuento",
    "10HOTSALE para obtener un 10% de descuento",
    "15HOTSALE para obtener un 15% de descuento",
    "20HOTSALE para obtener un 20% de descuento",
    "25HOTSALE para obtener un 25% de descuento"
];

// SI EL NOMBRE ESTA GUARDADO, LE MOSTRAMOS AL USUARIO EL DESCUENTO
if(nombreUsuario !== null) {

    for(let i=1; i<=arrayDescuentos.length; i++) {

        if(i===numeroAleatorio) {
            alert("Estimado/a " + nombreUsuario + ". Gracias por elegirnos! Le obsequiamos el código " + 
            arrayDescuentos[i] + "con su compra");
        }
    }
}