// INICIO

// OBTENEMOS DEL STORAGE EL NOMBRE DEL USUARIO
let nombreUsuario = localStorage.getItem("nombreJS");

// CREAMOS UN NUMERO ALEATORIO ENTRE MAX Y MIN
const MAX = 4;
const MIN = 0;
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
/* if(nombreUsuario !== null) {

    for(let i=0; i<arrayDescuentos.length; i++) {

        if(i===numeroAleatorio) {
            alert("Estimado/a " + nombreUsuario + ". Gracias por elegirnos! Le obsequiamos el código " + 
            arrayDescuentos[4] + "con su compra");
        }
    }
} */


// Se debería reducir a esto:
if(nombreUsuario !== null)
{
    alert("Estimado/a " + nombreUsuario + ". Gracias por elegirnos! Le obsequiamos el código " + 
            arrayDescuentos[numeroAleatorio] + "con su compra");
}