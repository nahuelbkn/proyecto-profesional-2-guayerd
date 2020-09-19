//Viene desde validacion.js.
function hasNumber(string) 
{
    let rta = /[0-9]/.test(string); // let rta = /\d/.test(string);
    return rta;
    // \d: Busca cualquier dígito (número arábigo). Equivalente a [0-9].
    //Por ejemplo, /\d/ o /[0-9]/ encuentra el "2" en "string" (string = "B2 es el número de suite").
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions/Clases_de_caracteres
}

