
//------------------------------------------------------------------------------------------->
// img - banner desde el servidor
//-------------------------------------------------------------------------------------------

const DIV_IMG_PRINCIPAL = document.querySelector("div.imagen-principal");
const RECURSO_BANNER = `${DOMINIO_APP}/getHomeBanner`;

fetch(RECURSO_BANNER)
.then(function(response)
{
    return response.json();
})
.then(function(objImagen)
{
    // TODO: Controlar error objImagen.err
    agregarObjImagen(objImagen, DIV_IMG_PRINCIPAL);
});

function agregarObjImagen(objImg, elemento)
{
    let HTML_TarjetaImagen = 
        `<a href="${objImg.link}" target="_blank">
            <img src="${objImg.imgUrl}" alt="${objImg.title}" class="imagen-principal">
        </a>`;

    elemento.innerHTML = HTML_TarjetaImagen;
}