document.addEventListener("DOMContentLoaded" , init);

function init()
{
    // Patrón a utilizar para validar el e-mail.
    const PATTERN_MAIL = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    // Url del servidor del cliente

    const RECURSO_CONSULTAS = `${DOMINIO_APP}/submitForm`;

    // DOM
    const FORMULARIO = document.querySelector(".formulario");
    let nombre = document.querySelector("#nombre");
    let email = document.querySelector("#email");
    let telefono = document.querySelector("#telefono");
    let mensaje = document.querySelector("#mensaje");
    let tema = document.querySelector("#tema");

    //LocalStorage
    const LS_NOMBRE = "nombreJS";
    const LS_EMAIL = "emailJS";

    //Recupero datos de LocalStorage
    let nombreUsuario_LS = localStorage.getItem(LS_NOMBRE);
    let emailUsuario_LS = localStorage.getItem(LS_EMAIL);


    //SetAtribute
    mensaje.setAttribute("minlength" , "20");
    mensaje.setAttribute("maxlength" , "800");

    ///Eventos
    FORMULARIO.addEventListener("submit" , enviarFormularioHandler);
    nombre.addEventListener("blur" , blurHandler);
    email.addEventListener("blur" , blurHandler);
    telefono.addEventListener("blur" , blurHandler);
    mensaje.addEventListener("blur" , blurHandler);

    //Se ejecuta en primer medida el autocompletado de datos que toma desde el LocalStorge.
    autocompletarCampos ();

    //-------------------------------------------------------------------------------------
    //Funciones
    function enviarFormularioHandler (event)
    {   
        event.preventDefault();

        let validacion = validarCampos(nombre , email , telefono , tema , mensaje);
        
        if(validacion) // Si todos los campos del formulario fueron completados de acuerdo a los requerimientos...
        {
            let nuevoMensaje = empaquetarMensaje(nombre.value , email.value , telefono.value , tema.value , mensaje.value);

            enviarDatosAlServidor(nuevoMensaje);

        }

    }

    function validarCampos(input_nombre , input_email , input_telefono , input_tema , input_mensaje)
    {   
        let validacion = false;

        let validacionNombre = validarNombre(input_nombre);
        let validacionMail = validarEmail(input_email);
        let validacionTelefono = validarTelefono(input_telefono);
        validarTema(input_tema);
        let validacionMensaje = validarMensaje(input_mensaje);

        if(validacionNombre && validacionMail && validacionTelefono && validacionMensaje)
        {
            validacion = true;
        }

        return validacion;
    }

    function validarNombre(elemento)
    {
        let respuesta = true;

        if((elemento.value === "") || (elemento.value === " ") /* || hasNumber(elemento.value) */)
        {
            elemento.value = "";
            elemento.placeholder = "Por favor, ingrese correctamente su nombre.";
            elemento.classList.add("error");
            respuesta = false;
        } 
        else 
        {
            elemento.classList.remove("error");
        }

        return respuesta;
    }

    function validarEmail(elemento)
    {
        let respuesta = true;

        if ( (elemento.value === "") || (elemento.value === " ") || !(PATTERN_MAIL.test(elemento.value)) )
        {
            
            elemento.value = "";
            elemento.placeholder = "Por favor, ingrese correctamente su email.";
            elemento.classList.add("error");
            respuesta = false;
        } 
        else 
        {
            elemento.classList.remove("error");
        }

        return respuesta;
    }

    function validarTelefono(elemento)
    {
        let respuesta = true;

        if( (elemento.value === "") || (elemento.value === " ") || isNaN(elemento.value) )
        {
            elemento.value = "";
            elemento.placeholder = "Por favor, ingrese correctamente su teléfono.";
            elemento.classList.add("error");
            respuesta = false;
        } 
        else 
        {
            elemento.classList.remove("error");
        }

        return respuesta;
    }

    function validarTema(elemento)
    {
        if(elemento.value === "-")
        {
            elemento.value = "otro";
        }
    }

    function validarMensaje(elemento)
    {
        let respuesta = true;

        if(elemento.value === "")
        {   
            elemento.placeholder = "Por favor, ingrese su mensaje.";
            elemento.classList.add("error");
            respuesta = false;
        } 
        else 
        {
            elemento.classList.remove("error");
        }

        return respuesta;
    }

    function empaquetarMensaje(nombre , email , telefono , tema , mensaje)
    {
    let objMensaje = {name: nombre , email: email, phone: telefono, subject: tema, message: mensaje}; 

    return objMensaje;
    }

    function enviarDatosAlServidor(OBJ_Mensaje)
    {
        fetch(RECURSO_CONSULTAS, {
            method:'POST',
            body: JSON.stringify(OBJ_Mensaje),
            headers:{'Content-Type':'application/json'} 
        })
        .then(function(response)
        {
            return response.json()
        })
        .then(function(mensaje){
            
            if(!mensaje.err) {
                alert(`Gracias ${nombre.value}, su mensaje ha sido enviado con éxito.`);
                limpiarCampos();
            }
        })
        .catch(err=> {
            alert(`No enviado. Intente nuevamente.`);
        });
    }

    // Función que limpia los campos del formulario.
    function limpiarCampos()
    {
        nombre.value = "";
        email.value = "";
        telefono.value = "";
        mensaje.value = "";
        tema.value = "-";
    }

    function blurHandler(e)
    {
        e.target.classList.remove("error");
    }

    //
    function autocompletarCampos ()
    {
        if (nombreUsuario_LS !== null)
        {
            nombre.value = nombreUsuario_LS; 
            
            if(emailUsuario_LS !== null)
            {
                email.value = emailUsuario_LS;
            }
    
        }
    }
}



  