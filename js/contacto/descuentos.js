
// OBTENEMOS DEL STORAGE EL NOMBRE DEL USUARIO
let nombreUsuario = localStorage.getItem("nombreJS");

const RECURSO_DESCUENTOS = `${DOMINIO_APP}/getCoupon`;

fetch(RECURSO_DESCUENTOS)
.then(function(response)
{
    return response.json();
})
.then(function(descuento)
{
    if(nombreUsuario !== null)
{
    alert(`Estimado/a ${nombreUsuario}. Gracias por elegirnos! Le obsequiamos un ${descuento.discountPercentage}% con el código ${descuento.text} para próxima compra.`);
}
});




