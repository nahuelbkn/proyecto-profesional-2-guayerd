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

MODELO OBJETO
`[{"title": "",
"description": "",
"imgUrl": "",
"inStock": 99,
"price": 9999,
"currency": "",
"discountPrice": 9999}]`


*/
const URL_PRODUCTOS = "https://demo2420474.mockable.io/productList";


// DOM 




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
                            <span>
                                <del>$${producto.price}</del>
                            </span>
                            <span>-${(producto.discountPrice * 100) / producto.price}%</span>
                        </div>
                        <div>
                            <span>
                                <span>$</span>
                                <span>${producto.discountPrice}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>`

        tarjetas += nuevaTarjeta;
    });

    SECTION_PRODUCTOS.innerHTML = tarjetas;
}