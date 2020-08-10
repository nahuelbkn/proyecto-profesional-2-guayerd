// Verifico el contenido del localStorage bajo el identificador "decisionNovedades"
decisionNovedades = localStorage.getItem(LS_DECISION_NOVEDADES);

if (decisionNovedades == "true")
{
    if (confirm("¡Tenemos ofertas personalizadas para vos!\n" + "¿Querés acceder a nuestra sección especial?"))
    {
        window.location.replace("ofertasPersonalizadas.html");
    }
}   