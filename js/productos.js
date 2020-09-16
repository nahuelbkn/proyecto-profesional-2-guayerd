/* 
ATENCIÓN A CAMPO "DISCOUNT"
Plantila productos completa:

`<div class="producto">
    <img src="" alt="Bicicleta ${producto.title}">
    <div>
        <h3>${producto.title}</h3>
        <p>  
            ${producto.description}
        </p>

        <div>
            <div>
                <span>Stock: </span>
                <span>${producto.inStock} unidades.</span>
            </div>

            <div class="precio-original">
                <span>
                    <del>$${producto.price}</del>
                </span>

                <span>-${(100-((producto.discountPrice * 100) / producto.price).toFixed(0))}%</span>
            </div>

            <div class="precio-final">
                <span>
                    <span>(${producto.currency})</span>
                    <span><strong>$</strong></span>
                    <span><strong>${producto.discountPrice}</strong></span>
                </span>
            </div>
        </div>
    </div>
</div>`

*/

const URL_PRODUCTOS = "https://demo2420474.mockable.io/productList";
/*
arrayProductos_ej = {
    "title": "",
    "description": "",
    "imgUrl": "",
    "inStock": 99,
    "price": 9999,
    "currency": "", 
    "discountPrice": 9999 //No se encuentra en todos los productos.
} 
*/

fetch(URL_PRODUCTOS)
.then(function(response)
{
    return response.json();
})
.then(function(productos)
{
   agregarProductos(productos);
});


//FUNCIONES   -----------------
function agregarProductos(arrayProductos)
{
    const SECTION_PRODUCTOS =  document.querySelector('section.productos');

    let tarjetas = "";
    arrayProductos.forEach(function(producto)
    {   
        //(Object.values(producto))[6] --> Object.values devuelve un arreglo con los valores de los Attr de un Obj.
       if(producto.discountPrice !== undefined) 
        {
            let nuevaTarjeta = 
            `<div class="producto">
                <img src="${producto.imgUrl}" alt="Bicicleta ${producto.title}">
                <div class="informacion-producto">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    
                    <div class="datos">
                        <div>
                            <span class="precio-tachado">
                                <del>$${producto.price}</del>
                            </span>
                        </div>
                        
                        <div>
                            <span>
                                <span class="descuento bolt">${(100-((producto.discountPrice * 100) / producto.price).toFixed(0))}% OFF</span>
                                <span><br></span>
                                <span class="precio-final bolt">$${producto.discountPrice}</span> 
                                <span>(${producto.currency})</span>
                            </span>
                        </div>
                        
                        <div class="stock">
                            <span>Stock: </span>
                            <span>${producto.inStock} unidades.</span>
                        </div>
                    </div>

                </div>
            </div>`

            tarjetas += nuevaTarjeta;
        }
        else 
        {
            let nuevaTarjeta = 
            `<div class="producto">
                <img src="${producto.imgUrl}" alt="Bicicleta ${producto.title}">
                
                <div class="informacion-producto">

                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>

                    <div class="datos">
                        <div>
                            <span class="precio-final bolt" >$ ${producto.price}</span>
                            <span>(${producto.currency})</span>
                        </div>
                        
                        <div class="stock">
                            <span>Stock: </span>
                            <span>${producto.inStock}</span>
                        </div>
                    </div>

                </div>
            </div>`

            tarjetas += nuevaTarjeta;
        }
    });

    SECTION_PRODUCTOS.innerHTML += tarjetas;
}