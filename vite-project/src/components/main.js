const productos = [
  {
    nombre: "Smartphone Galaxy S21",
    precio: 799.99,
    stock: 10,
    descripcion: "El último smartphone de Samsung con pantalla AMOLED y cámara de alta resolución.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_701848-MLA53734668228_022023-V.webp",
    categoria: "celulares",
    id: 1,
    cantidad: []
  },
  {
    nombre: "Portátil MacBook Pro",
    precio: 1499.99,
    stock: 5,
    descripcion: "Un potente portátil de Apple con pantalla Retina y procesador Intel Core i7.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_666556-MCO53830618390_022023-V.webp",
    categoria: "computadoras",
    id: 2,
    cantidad: []
  },
  {
    nombre: "TV LED 4K Sony",
    precio: 699.99,
    stock: 8,
    descripcion: "Un televisor Sony con resolución 4K y tecnología HDR para imágenes impresionantes.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_860708-MLA52578852090_112022-V.webp",
    categoria: "televisores",
    id: 3,
    cantidad: []
  },
  {
    nombre: "Tablet Android",
    precio: 299.99,
    stock: 12,
    descripcion: "Una tablet Android con pantalla HD y alto rendimiento.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_704275-MLU70761085885_072023-V.webp",
    categoria: "tablets",
    id: 4,
    cantidad: []
  },
  {
    nombre: "Laptop HP Envy",
    precio: 1099.99,
    stock: 7,
    descripcion: "La laptop HP Envy con pantalla táctil y procesador Intel Core i5.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_888684-MLU69879951274_062023-V.webp",
    categoria: "computadoras",
    id: 5,
    cantidad: []
  },
  {
    nombre: "Cámara DSLR Canon",
    precio: 899.99,
    stock: 4,
    descripcion: "Una cámara réflex digital Canon con sensor de alta resolución.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_901198-MLA45730773446_042021-V.webp",
    categoria: "celulares",
    id: 6,
    cantidad: []
  },
  {
    nombre: "Auriculares Bluetooth Sony",
    precio: 129.99,
    stock: 20,
    descripcion: "Auriculares inalámbricos con calidad de sonido excepcional.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_918604-MLA44483909501_012021-V.webp",
    categoria: "celulares",
    id: 7,
    cantidad: []
  },
  {
    nombre: "Impresora HP LaserJet",
    precio: 299.99,
    stock: 9,
    descripcion: "Una impresora láser HP de alta velocidad para la oficina.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_742342-MLU70801309981_072023-V.webp",
    categoria: "computadoras",
    id: 8,
    cantidad: []
  },
  {
    nombre: "Monitor Dell 4K",
    precio: 499.99,
    stock: 6,
    descripcion: "Un monitor 4K de alta resolución para una experiencia visual impresionante.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_760466-MLA48984137304_012022-V.webp",
    categoria: "televisores",
    id: 9,
    cantidad: []
  },
  {
    nombre: "Teclado Mecánico Gaming",
    precio: 79.99,
    stock: 18,
    descripcion: "Un teclado mecánico diseñado para jugadores con retroiluminación RGB.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_775176-MLA50158986097_062022-V.webp",
    categoria: "computadoras",
    id: 10,
    cantidad: []
  },
  {
    nombre: "Mouse Logitech Inalámbrico",
    precio: 49.99,
    stock: 15,
    descripcion: "Un mouse inalámbrico de precisión con tecnología Logitech.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_966913-MLA32149634914_092019-V.webp",
    categoria: "computadoras",
    id: 11,
    cantidad: []
  },
  {
    nombre: "Disco Duro Externo 1TB",
    precio: 79.99,
    stock: 14,
    descripcion: "Un disco duro externo de 1TB para almacenar tus datos importantes.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_806884-MLA47690902400_092021-V.webp",
    categoria: "computadoras",
    id: 12,
    cantidad: []
  },
  {
    nombre: "Altavoces Bluetooth JBL",
    precio: 149.99,
    stock: 10,
    descripcion: "Altavoces Bluetooth portátiles con sonido de alta fidelidad.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_988383-MLA51954751195_102022-V.webp",
    categoria: "computadoras",
    id: 13,
    cantidad: []
  },
  {
    nombre: "Smartwatch Samsung",
    precio: 199.99,
    stock: 11,
    descripcion: "Un reloj inteligente Samsung con seguimiento de actividad y pantalla táctil.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_860197-MLA45730710737_042021-V.webp",
    categoria: "celulares",
    id: 14,
    cantidad: []
  },
  {
    nombre: "Router Wi-Fi ASUS",
    precio: 89.99,
    stock: 8,
    descripcion: "Un router Wi-Fi de alto rendimiento de ASUS para una conexión rápida y estable.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_740437-MLA45806585794_052021-V.webp",
    categoria: "computadoras",
    id: 15,
    cantidad: []
  },
  {
    nombre: "Batería Externa Anker",
    precio: 39.99,
    stock: 20,
    descripcion: "Una batería externa de alta capacidad para cargar tus dispositivos en movimiento.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_902273-MLU52663465566_112022-V.webp",
    categoria: "celulares",
    id: 16,
    cantidad: []
  },
  {
    nombre: "Reproductor de Blu-ray LG",
    precio: 69.99,
    stock: 6,
    descripcion: "Un reproductor de Blu-ray con capacidad de reproducción de alta definición.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_856065-MLU49312814129_032022-V.webp",
    categoria: "televisores",
    id: 17,
    cantidad: []
  },
  {
    nombre: "Tarjeta Gráfica NVIDIA",
    precio: 299.99,
    stock: 7,
    descripcion: "Una tarjeta gráfica NVIDIA de última generación para juegos y edición de video.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_629136-MLA51228682876_082022-V.webp",
    categoria: "computadoras",
    id: 18,
    cantidad: []
  },
  {
    nombre: "Altavoces Sonos",
    precio: 249.99,
    stock: 9,
    descripcion: "Altavoces inalámbricos Sonos con calidad de sonido premium.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_624402-MLU70615738766_072023-V.webp",
    categoria: "computadoras",
    id: 19,
    cantidad: []
  },
  {
    nombre: "Cámara de Seguridad Nest",
    precio: 129.99,
    stock: 12,
    descripcion: "Una cámara de seguridad Nest para monitorear tu hogar en tiempo real.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_802917-MLU71063699654_082023-V.webp",
    categoria: "celulares",
    id: 20,
    cantidad: []
  },
  // Agrega aquí más productos con la propiedad "cantidad" configurada como un array vacío
];


export default productos

export const obtenerProductosId=(id)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(productos.find(producto=>producto.id==id))
    },1000)
  })
}
export const obtenerProductosCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter((producto) => producto.categoria === categoria)
      resolve(productosCategoria)
    }, 1000)
  })
}
export const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 1000)
  })
}
