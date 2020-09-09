/* 
Plantila productos:

<div class="producto">
    <img src="" alt="Bicicleta #">
    <div>
        <h3></h3>
        <p>  

        </p>
    </div>
</div>

URL backend: https://demo2420474.mockable.io/productList




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
    "discountPrice": 9999
} 

let objeto_1 = Object.values(arrayProductos_ej);
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

    let tarjetas;
    arrayProductos.forEach(function(producto)
    {
       if(producto.discountPrice !== undefined) //(Object.values(producto))[6] --> Object.values devuelve un arreglo con los valores de los Attr de un Obj.
        {
            let nuevaTarjeta = 
            `<div class="producto">
                <img src="${producto.imgUrl}" alt="Bicicleta ${producto.title}">
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
                        <div>
                            <span>
                                <del>$${producto.price}</del>
                            </span>
                            <span>-${(100-((producto.discountPrice * 100) / producto.price).toFixed(0))}%</span>
                        </div>
                        <div>
                            <span>
                                <span>(${producto.currency})</span>
                                <span><strong>$</strong></span>
                                <span><strong>${producto.discountPrice}</strong></span>
                            </span>
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
                <div>
                    <h3>${producto.title}</h3>
                    <p>  
                        ${producto.description}
                    </p>

                    <div>
                        <div>
                            <span>Stock: </span>
                            <span>${producto.inStock}</span>
                        </div>
                        <div>
                            <span>(${producto.currency})</span>
                            <span><strong>$</strong></span>
                            <span><strong>${producto.price}</strong></span>
                        </div>
                    </div>
                </div>
            </div>`

            tarjetas += nuevaTarjeta;
        }

    });

    SECTION_PRODUCTOS.innerHTML = tarjetas;
}