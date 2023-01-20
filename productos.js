//CREAMOS NUESTRO ARRAY DE PRODUCTOS
const productos = [
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

//GUARDAMOS NUESTRO ARRAY EN LOCAL STORAGE 
localStorage.setItem('productos', JSON.stringify(productos))

//esto lo hago para tener un array ordenado separado del resto del codigo