// Se definen las constantes
const LS_NOMBRE = "nombreJS";
const LS_EMAIL = "emailJS";
const LS_DECISION = "decision";
const LS_DECISION_NOVEDADES = "decisionNovedades";


// Se inicializan las variables con lo que pueda haber guardado en localStorage.
//Si no hay nada, las variables e inicializarán con "null".
let decision = localStorage.getItem(LS_DECISION);
let nombreUsuarioIndex = localStorage.getItem(LS_NOMBRE);
let emailUsuario = localStorage.getItem(LS_EMAIL);
let decisionNovedades = localStorage.getItem(LS_DECISION_NOVEDADES);

// Analizo el contenido de la variable nombre
// Si contiene un null se pedirán los datos de la pensona.
if (!nombreUsuarioIndex && decision === null)// Si existe un nombre de usuario, "decision" nunca pude contener true
{
   if(confirm("¿Desea guardar sus datos?"))
   {
       decision = true;
       
       if(confirm("¿Desea recibir novedades por e-mail?"))
       {
           decisionNovedades = true;
       }
       else
       {
           decisionNovedades = false;
       }
       
       pedirDatos(decisionNovedades);
   }
   else
   {
        decision = false;
        //decisionNovedades = false;
   }

   guardarDecisiones(decision, decisionNovedades);
}



function pedirDatos(decisionML)
{
    // Pedir nombre
    do
    {
        nombreUsuarioIndex = prompt("Ingrese su nombre: ");
    } while ( !validarNombre(nombreUsuarioIndex) );

    // Pedir e-mail
    do
    {
        emailUsuario = prompt("Ingrese su e-mail:");
    } while ( !validarEMail(emailUsuario) );

    guardarDatosEnLS(nombreUsuarioIndex, emailUsuario);
    
    enviarDatosServidor(nombreUsuarioIndex, emailUsuario, decisionML);
}

//Funciones

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

function enviarDatosServidor(nombre, email , decision)
{
    const token = "GRUPOE2020";

    let nuevoContacto = crearContacto(token , nombre, email , decision);

    fetch("https://demo2420474.mockable.io/userData", {
        method:'POST',
        body: JSON.stringify(nuevoContacto),
        headers:{'Content-Type':'application/json'} 
    }).then(function(response)
    {
        return response.json()
    }).then(function(contacto){
        return contacto;
    })
};


function crearContacto (token , nombre , email , sendEmail)
{
  let contacto = {token: token , nombre: nombre, email: email, sendEmail: sendEmail}; 
    
  return contacto;
}



// Guardar datos en localStorage.
function guardarDatosEnLS(nombre, email)
{
    localStorage.setItem(LS_NOMBRE, nombre);
    localStorage.setItem(LS_EMAIL, email);
}

// Guardar decision.
function guardarDecisiones(decision, decisionNovedades) // A este punto solo pueden llegar dos valores: True o False.
{
    localStorage.setItem(LS_DECISION, decision);
    localStorage.setItem(LS_DECISION_NOVEDADES, decisionNovedades);
}