
//AQUI RECUPERAMOS NUESTRO ARRAY DEL LOCAL STORAGE
let recuproductos = JSON.parse(localStorage.getItem("productos"))

//Aqui debajo tenemos los elementos que llamamos del HTML usando el ID que le asignamos 
let contenedor =document.getElementById("contenedor"); //Este nos sirve para trabajar en el contenedor donde van a estar alojados todos los productos en el HTML
let contenedorCarrito =document.getElementById("contenedor-carrito");//Este para ir cargando los productos agregados al carrito
let vaciarCarrito = document.getElementById("vaciarCarrito");//Este es nuestro enlace entre el boton de VACIAR CARRITO en el HTML con la funcion
let contadorCarrito = document.getElementById("contadorItm");
let sumaCarrito = document.getElementById("sumaCarrito");

let carrito = []//Esta variable la declaramos vacia, peor nos va a servir para ir almacenando todos los productos que vamos a ir agregando al carrito por medio de una funcion 


//ALMACENAMOS EL CARRITO EN LOCAL STORAGE
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


//Aca creamos una funcion que borra todos los elementos agregados al carrito
vaciarCarrito.addEventListener("click", () => { //declaramos un evento de tipo click
    localStorage.clear() 
    carrito.length = 0 //creamos una funcion para ese evento click que lleve a 0 nuestro array carrito
    actualizarCarrito() //llamamos la funcion de actualizar carrito
})

//AQUI CREAMOS LOS PRODUCTOS EN EL DOM
productos.forEach(productos => { //Usamos un forEach para que por cada producto...
    let div= document.createElement("div");//...se cree un elemento div...
    div.innerHTML = //...y que por dentro contenga los siguientes elementos
    `<h2>${productos.nombre}</h2>
    <p>Categoria: ${productos.cat}</p>
    <p>Descripcion: ${productos.desc}</p>
    <p>Presentacion: ${productos.pres}</p>
    <p>Precio: $${productos.precio}</p>
    <button id=boton${productos.id}> Agregar </button>
    `;
    
    contenedor.append(div);//esta linea inserta el div que creamos en contenedor del HTML
    
    let boton = document.getElementById(`boton${productos.id}`)//Aca llamamos al boton que se genera en cada producto creado
    boton.addEventListener("click", () => agregarCarrito (productos.id,));//...le asignamos un evento tipo click que llama a una funcion
    
})

//FUNCION QUE AGREGA LOS PRODUCTOS AL CARRITO
//le agregamos un timeout  
const agregarCarrito = (prodId) => {
    setTimeout(() => {
    const existe= carrito.some(prod => prod.id === prodId)//con esta funcion logramos que los productos se sumen en una sola linea siempre y cuando se repitan
    if(existe){
        const prod = carrito.some (prod => {
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    } else{

    const item = productos.find ((prod) => prod.id === prodId)//..tomando como parametro el ID del producto...
    carrito.push(item)//...agregamos el producto...
    localStorage.setItem("carrito", JSON.stringify (carrito));//...a travez de esta linea enviamos el estado del carrito al local storage de una manera que lo reconozca como un array usando JSON
    }
    actualizarCarrito()//...y llamamos la funcion que actualiza el estado del carrito
    }, 500)
}

//FUNCION QUE ELIMINA PRODUCTOS DEL CARRITO LINEA POR LINEA
const eliminarDelCarrito= (prodId) =>{//cramos un funcion que...
    const item = carrito.find ((prod) => prod.id === prodId)//..tomando como parametro el ID del producto...
    let indice= carrito.indexOf (item)//...declaramos una variable que alvergue el index del producto tomado anteriomente...
    carrito.splice(indice, 1)//...y le decimo que elimie un elemento apartir de ese index tomado, por lo cual elimina solo ese producto
    actualizarCarrito()//...actualizamos el estado del carrito
}

//CREAMOS LOS PRODUCTOS EN EL CARRITO 
const actualizarCarrito = () =>{//declaramos la funcion que tanto se uso anteriormente...
    contenedorCarrito.innerHTML=""//...creamos un inner vacio para que no se dupliquen los elementos en el carrito

    carrito.forEach(prod => {//...y por cada elemento que s encuentre en el carrito...
        let div = document.createElement(`div`)//...creamos un div...
        div.innerHTML =//..que contenga en su interior los siguientes elementos:
        `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})">Eliminar🗑️</button>
        `
        contenedorCarrito.appendChild(div)//esta linea inserta el div que creamos en contenedor del HTML
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = "Tienes " + (carrito.length)+" productos en el carrito"//contador de productos agregados
    sumaCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)//monto total del carrito
}
