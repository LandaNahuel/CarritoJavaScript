const productos = [
    {id:1, cat: "Cafe", nombre:"Bonafide", desc:"Cafe en granos torrado suabe", pres:"paquete por 250gr", precio:639},
    {id:2, cat: "Cafe", nombre:"La Virgina", desc:"Cafe en granos torrado intenso", pres:"paquete por 500gr", precio:1129},
    {id:3, cat: "Cafe", nombre:"Morenita", desc:"Cafe en capsula", pres:"20 unidades", precio:429},
    {id:4, cat: "Cafe", nombre:"Martinez", desc:"Cafe molido tostado", pres:"paquete por 330gr", precio:2225.80},
    {id:5, cat: "Cafe", nombre:"Martinez", desc:"Cafe molido Moka Frutado", pres:"paquete por 330gr", precio:2254.55},
    {id:6, cat: "Vajillas", nombre:"Set Sakura", desc:"Set de vajilla para 12 personas", pres:"36 piezas", precio:180.39},
    {id:7, cat: "Vajillas", nombre:"Set Durax", desc:"Set de vasos cubiertos y platos", pres:"42 piezas", precio:8999},
    {id:8, cat: "Vajillas", nombre:"Set Rigolleau", desc:"Set de vajilla de vidrio completo", pres:"37 piezas", precio:9199},
    {id:9, cat: "Vajillas", nombre:"Set Verbano", desc:"Juego de platos playos de 25cm", pres:"12 piezas", precio:16273},
    {id:10, cat: "Vajillas", nombre:"Set Sushi", desc:"Set de vajilla para sushi", pres:"8 piezas", precio:639},
    {id:12, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle M", precio:1500},
    {id:13, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle L", precio:1500},
    {id:11, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle S", precio:1500},
    {id:14, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle XL", precio:1500},
    {id:15, cat: "Remeras", nombre:"Remera Cosecha", desc:"Remera de algodon estampada", pres:"talle XXL", precio:1500},
    {id:16, cat: "Yogures", nombre:"Salvia Morada", desc:"Yogurt griego natural", pres:"Botella por 1kg", precio:1239},
    {id:17, cat: "Yogures", nombre:"Tania's Kefir", desc:"Yogurt griego natural firme", pres:"Botella por 1kg", precio:1599},
    {id:18, cat: "Yogures", nombre:"Milkaut", desc:"Yogur entero", pres:"pote por 220gr", precio:250},
    {id:19, cat: "Yogures", nombre:"La Serenisima", desc:"Yogurt entero de frutilla", pres:"pote por 250gr", precio:230},
    {id:20, cat: "Yogures", nombre:"Sancor", desc:"Yogurt natural", pres:"pote por 250gr", precio:320},
    {id:21, cat: "La Huerta", nombre:"Banana", desc:"Organica", pres:"por Kg", precio:230},
    {id:22, cat: "La Huerta", nombre:"Frutilla", desc:"Organica", pres:"por Kg", precio:320},
    {id:23, cat: "La Huerta", nombre:"Sandia", desc:"Organica", pres:"por Kg", precio:300},
    {id:24, cat: "La Huerta", nombre:"Lechuga", desc:"Organica", pres:"por Kg", precio:170},
    {id:25, cat: "La Huerta", nombre:"Tomate", desc:"Organico", pres:"por Kg", precio:250},
]

let contenedor =document.getElementById("contenedor");

productos.forEach(productos => {
    let div= document.createElement("div");
    div.innerHTML = `
    <h2>${productos.nombre}</h2>
    <p>Categoria: ${productos.cat}</p>
    <p>Descripcion: ${productos.desc}</p>
    <p>Presentacion: ${productos.pres}</p>
    <p>Precio: $${productos.precio}</p>
    <button id=boton${productos.id}> Agregar </button>
    `;

    contenedor.append(div);
    let boton = document.getElementById(`boton${productos.id}`)

    const ejecutar = (id,precio) => {
        localStorage.setItem("favoritos", JSON.stringify (productos.id,productos.precio));
    }
    boton.addEventListener("click", () => ejecutar (productos.id,));


})


/*
localStorage.setItem("favoritos", JSON.stringify (productos));

let favoritos= localStorage.getItem("favoritos")
console.log(favoritos)

/*
let nombreCarrito = localStorage.getItem("productos")
console.log(productos.nombre);

let presCarrito = localStorage.getItem("productos")
console.log(productos.pres);

let precioCarrito = localStorage.getItem("productos")
console.log(productos.precio);*/