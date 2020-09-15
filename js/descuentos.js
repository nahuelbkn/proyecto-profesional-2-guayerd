// OBTENEMOS DEL STORAGE EL NOMBRE DEL USUARIO
let nombreUsuario = localStorage.getItem("nombreJS");

const URL_DESCUENTO = "https://demo2420474.mockable.io/getCoupon ";

fetch(URL_DESCUENTO)
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




