/*
---------------------------------------------------------------------
Necesitamos crear una nueva página en el sitio: ofertasPersonalizadas.html

Debe incluir la imagen adjunta centrada.
Debe tener el mismo estilo que el sitio.
El usuario debe poder acceder al menú de navegación desde allí
---------------------------------------------------------------------
Historia de usuario: "Como visitante del sitio, si deseo ver ofertas personalizadas, debería poder seleccionar la acción y ser dirigido a la misma".

Se Necesita:
- Cuando usuario ingresa a la pagina de listado de productos, informarle que tenemos ofertas personalizadas utilizando un popUp (confirm). Si indica que si, redirigirlo a la página correspondiente. Esta acción se dispara bajo las siguientes condiciones:

El usuario accedió a recibir novedades por email
Nota del arquitecto
Redirección en JS:
window.location.replace("ofertasPersonalizadas.html");
---------------------------------------------------------------------
 */

// Se definen las constantes
const LS_NOMBRE = "nombre";
const LS_EMAIL = "email";
const LS_DECISION = "decision";

// Se inicializan las variables con lo que pueda haber guardado en localStorage.
//Si no hay nada, las variables e inicializarán con "null".
let decision = localStorage.getItem(LS_DECISION);
let nombreUsuario = localStorage.getItem(LS_NOMBRE);
let emailUsuario = localStorage.getItem(LS_EMAIL);


// Analizo el contenido de la variable nombre
// Si contiene un null se pedirán los datos de la pensona.
if (!nombreUsuario && decision == null)// Si existe un nombre de usuario, "decision" nunca pude contener true
{
   if (confirm("¿Desea ingresar su nombre e e-mail?"))
   {
        perdirDatos();
        decision = true;
   }
   else
   {
        decision = false;
   }

   guardarDecision(decision);
}



function perdirDatos()
{
    // Pedir nombre
    do
    {
        nombreUsuario = prompt("Ingrese su nombre: ");
    } while ( !validarNombre(nombreUsuario) );

    // Pedir e-mail
    do
    {
        emailUsuario = prompt("Ingrese su e-mail:");
    } while ( !validarEMail(emailUsuario) );

    guardarDatosEnLS(nombreUsuario, emailUsuario);
}


function validarNombre(nombre)
{
    let valido = false;

    if ( nombre != null && nombre.length > 0 )
    {
        valido = true;
    }

    return valido;
}


function validarEMail(email)
{
    let valido = false;

    if (  email != null && email.length > 0  && email.includes(".") && email.includes("@") ) 
    {
        valido = true;
    }

    return valido;
}




// Guardar datos en localStorage
function guardarDatosEnLS(nombre, email)
{
    localStorage.setItem(LS_NOMBRE, nombre);
    localStorage.setItem(LS_EMAIL, email);
}

// Guardar decision;
function guardarDecision(decision) // A este punto solo pueden llegar dos valores: True o False.
{
    localStorage.setItem(LS_DECISION, decision);
}


