

// Se definen constantes
const LS_NOMBRE = "nombreJS";
const LS_EMAIL = "emailJS";
const LS_DECISION = "decision";
const LS_DECISION_NOVEDADES = "decisionNovedades";
const URL_DATOS_VISITANTES = `${DOMINIO_APP}/userData`;



// Se inicializan las variables con lo que pueda haber guardado en localStorage.
// Si no hay nada, las variables e inicializarán con "null".
let decision = localStorage.getItem(LS_DECISION);
let nombreUsuarioIndex = localStorage.getItem(LS_NOMBRE);
let emailUsuario = localStorage.getItem(LS_EMAIL);
let decisionNovedades = localStorage.getItem(LS_DECISION_NOVEDADES);


// Analizo el contenido de la variable nombre
// Si contiene un null se pedirán los datos de la pensona.
// Si existe un nombre de usuario, "decision" nunca pude contener true
if (!nombreUsuarioIndex && decision === null)
{
   if(confirm("Bienvenido/a, ¿Desea guardar su nombre y su email?"))
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
    } while ( !validarEmail(emailUsuario) );
    
    enviarDatosServidor(nombreUsuarioIndex, emailUsuario, decisionML);
}

//Funciones
function validarNombre(nombre)
{
    let valido = false;

    if ( nombre != null && nombre.length > 0 && nombre !== " " )
    {
        valido = true;
    }

    return valido;
}


function validarEmail(email)
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

    fetch(URL_DATOS_VISITANTES , 
    {
        method:'POST',
        body: JSON.stringify(nuevoContacto),
        headers:{'Content-Type':'application/json'} 
    })
    .then(function(response)
    {
        return response.json()
    })
    .then(function(contacto)
    {
        if (!contacto.err)
        {
            guardarDatosEnLS(nombreUsuarioIndex, emailUsuario);
            alert("Sus datos se guardaron correctamente.");
        }
    })
    .catch(function(errorReceived)
    {
        alert("No se pudieron guardar sus datos. Intente más tarde.");
    });
};


function crearContacto (token , nombre , email , sendEmail)
{
  let contacto = {token: token , name: nombre, email: email, sendEmail: sendEmail}; 
    
  return contacto;
}

// Guardar datos en localStorage.
function guardarDatosEnLS(nombre, email)
{
    localStorage.setItem(LS_NOMBRE, nombre);
    localStorage.setItem(LS_EMAIL, email);
}

// Guardar decisión en LocalStorage.
// A este punto solo pueden llegar dos valores: True o False.
function guardarDecisiones(decision, decisionNovedades) 
{
    localStorage.setItem(LS_DECISION, decision);
    localStorage.setItem(LS_DECISION_NOVEDADES, decisionNovedades);
}

// Heatmap --------------------------------------------------------------------------------------
const heatmap =  document.getElementById("mapacalor");

const tarjeta_heatmap = 
    `<script>
        (function(h,e,a,t,m,p) 
        {
            m=e.createElement(a);m.async=!0;m.src=t;
            p=e.getElementsByTagName(a)[0];p.parentNode.insertBefore(m,p);
        })
        (window,document,'script','https://u.heatmap.it/log.js');
    </script>`;

    heatmap.innerHTML = tarjeta_heatmap;

//Estadisticas---------------------------------------------------------------------------------
const estadisticas =document.getElementById("estadisticas");
const tarjeta_estadisticas =
        `<div class="contador" id="sfcc7t6zs95ynk6te8wqb84pxdg7gb5fhy1"></div>
        
        <script type="text/javascript" src="https://counter3.stat.ovh/private/counter.js?c=c7t6zs95ynk6te8wqb84pxdg7gb5fhy1&down=async" async></script>
        
        <noscript>
            <a href="https://www.contadorvisitasgratis.com" title="contador de visitas gratis">
            <img src="https://counter3.stat.ovh/private/contadorvisitasgratis.php?c=c7t6zs95ynk6te8wqb84pxdg7gb5fhy1" title="contador de visitas gratis" alt="contador de visitas gratis"></a>
        </noscript>`;

estadisticas.innerHTML = tarjeta_estadisticas;
