
const productos = [//Aca declaramos el listado de productos
    {id:1, cat: "Cafe", nombre:"Bonafide", desc:"Cafe en granos torrado suabe", pres:"paquete por 250gr", cantidad:1, precio:639},
    {id:2, cat: "Cafe", nombre:"La Virgina", desc:"Cafe en granos torrado intenso", pres:"paquete por 500gr", cantidad:1, precio:1129},
    {id:3, cat: "Cafe", nombre:"Morenita", desc:"Cafe en capsula", pres:"20 unidades", cantidad:1, precio:429},
    {id:4, cat: "Cafe", nombre:"Martinez", desc:"Cafe molido tostado", pres:"paquete por 330gr", cantidad:1, precio:2225.80},
    {id:5, cat: "Cafe", nombre:"Martinez", desc:"Cafe molido Moka Frutado", pres:"paquete por 330gr", cantidad:1, precio:2254.55},
    {id:6, cat: "Vajillas", nombre:"Set Sakura", desc:"Set de vajilla para 12 personas", pres:"36 piezas", cantidad:1, precio:180.39},
    {id:7, cat: "Vajillas", nombre:"Set Durax", desc:"Set de vasos cubiertos y platos", pres:"42 piezas", cantidad:1, precio:8999},
    {id:8, cat: "Vajillas", nombre:"Set Rigolleau", desc:"Set de vajilla de vidrio completo", pres:"37 piezas", cantidad:1, precio:9199},
    {id:9, cat: "Vajillas", nombre:"Set Verbano", desc:"Juego de platos playos de 25cm", pres:"12 piezas", cantidad:1, precio:16273},
    {id:10, cat: "Vajillas", nombre:"Set Sushi", desc:"Set de vajilla para sushi", pres:"8 piezas", cantidad:1, precio:639},
    {id:12, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle M", cantidad:1, precio:1500},
    {id:13, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle L", cantidad:1, precio:1500},
    {id:11, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle S", cantidad:1, precio:1500},
    {id:14, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle XL", cantidad:1, precio:1500},
    {id:15, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle XXL", cantidad:1, precio:1500},
    {id:16, cat: "Yogures", nombre:"Salvia Morada", desc:"Yogurt griego natural", pres:"Botella por 1kg", cantidad:1, precio:1239},
    {id:17, cat: "Yogures", nombre:"Tania's Kefir", desc:"Yogurt griego natural firme", pres:"Botella por 1kg", cantidad:1, precio:1599},
    {id:18, cat: "Yogures", nombre:"Milkaut", desc:"Yogur entero", pres:"pote por 220gr", cantidad:1, precio:250},
    {id:19, cat: "Yogures", nombre:"La Serenisima", desc:"Yogurt entero de frutilla", pres:"pote por 250gr", cantidad:1, precio:230},
    {id:20, cat: "Yogures", nombre:"Sancor", desc:"Yogurt natural", pres:"pote por 250gr", cantidad:1, precio:320},
    {id:21, cat: "La Huerta", nombre:"Banana", desc:"Organica", pres:"por Kg", cantidad:1, precio:230},
    {id:22, cat: "La Huerta", nombre:"Frutilla", desc:"Organica", pres:"por Kg", cantidad:1, precio:320},
    {id:23, cat: "La Huerta", nombre:"Sandia", desc:"Organica", pres:"por Kg", cantidad:1, precio:300},
    {id:24, cat: "La Huerta", nombre:"Lechuga", desc:"Organica", pres:"por Kg", cantidad:1, precio:170},
    {id:25, cat: "La Huerta", nombre:"Tomate", desc:"Organico", pres:"por Kg", cantidad:1, precio:250},
]

//Aqui debajo tenemos los elementos que llamamos del HTML usando el ID que le asignamos 
let contenedor =document.getElementById("contenedor"); //Este nos sirve para trabajar en el contenedor donde van a estar alojados todos los productos en el HTML
let contenedorCarrito =document.getElementById("contenedor-carrito");//Este para ir cargando los productos agregados al carrito
let vaciarCarrito = document.getElementById("vaciarCarrito");//Este es nuestro enlace entre el boton de VACIAR CARRITO en el HTML con la funcion
let contadorCarrito = document.getElementById("contadorItm");
let sumaCarrito = document.getElementById("sumaCarrito");

let carrito = []//Esta variable la declaramos vacia, peor nos va a servir para ir almacenando todos los productos que vamos a ir agregando al carrito por medio de una funcion 

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

const agregarCarrito = (prodId) => {//cramos un funcion que...
    setTimeout(() => {
    const existe= carrito.some(prod => prod.id === prodId)

    if(existe){
        const prod = carrito.some (prod => {
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    } else{

    const item = productos.find ((prod) => prod.id === prodId)//..tomando como parametro el ID del producto...
    
    carrito.push(item)//...agregamos el producto...
    
    //console.log(carrito)
    localStorage.setItem("carrito", JSON.stringify (carrito));//...a travez de esta linea enviamos el estado del carrito al local storage de una manera que lo reconozca como un array usando JSON
}
actualizarCarrito()//...y llamamos la funcion que actualiza el estado del carrito
}, 1000)
}


const eliminarDelCarrito= (prodId) =>{//cramos un funcion que...
    const item = carrito.find ((prod) => prod.id === prodId)//..tomando como parametro el ID del producto...
    let indice= carrito.indexOf (item)//...declaramos una variable que alvergue el index del producto tomado anteriomente...
    carrito.splice(indice, 1)//...y le decimo que elimie un elemento apartir de ese index tomado, por lo cual elimina solo ese producto
    actualizarCarrito()//...actualizamos el estado del carrito
}


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
    contadorCarrito.innerText = "Tienes " + (carrito.length)+" productos en el carrito"
    sumaCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}
