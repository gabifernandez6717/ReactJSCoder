import { createContext, useState, useEffect  } from "react"
export const ContextoCarrito= createContext()
import { db } from "../db/db"
import { collection, getDocs } from "firebase/firestore"
export const CartProvider=({children})=>{

    const [carrito, setcarrito] = useState([])
    const [productosFirebase, setProductosFirebase] = useState([])
    const [lproductos, setlproductos] = useState([])

    // Obtener productos de Firebase
    useEffect(() => {
        const obtenerProductosFirebase = async () => {
        const referenciaProductos = collection(db, "productos")
        const productosSnapshot = await getDocs(referenciaProductos)
        //se crea el array productos
        const productos = []

        productosSnapshot.forEach((doc) => {
        const producto = { id: doc.id, ...doc.data() }
        //se pushea producto a el array productos
        productos.push(producto)
        })
        setProductosFirebase(productos)
        }
    obtenerProductosFirebase()
    }, [])

    const aniadirAlCarrito = (idProducto) => {
    const productoExistente = carrito.find((producto) => producto.id === idProducto)
    const productoFirebase = productosFirebase.find((producto) => producto.id === idProducto)


    if (productoExistente) {
        // Si el producto ya está en el carrito, aumenta su cantidad
        setcarrito((prevCarrito) => {
            return prevCarrito.map((producto) =>
            producto.id === idProducto
            ? {
                ...producto,
                cantidad: producto.cantidad < productoFirebase.stock ? producto.cantidad + 1 : producto.cantidad,
                }
            : producto
            )
        })
    } else {
        // Si el producto no está en el carrito, se agrega con cantidad 1
        if (productoFirebase) {
        setcarrito((prevCarrito) => [...prevCarrito, { ...productoFirebase, cantidad: 1 }])
        }
    }
    }

    //actualizar la cantidad en el carrito
    const actualizarCarritoCantidad = (idProducto, nuevaCantidad) => {
        setcarrito((prevCarrito) => {
            return prevCarrito.map((producto) =>
            producto.id === idProducto
            ? {
                    ...producto,
                    cantidad: nuevaCantidad,
                }
                : producto
                )
            })
        }
    //Limpiar carrito
    const limpiarCarrito=()=>{
        setcarrito([])
    }
    //remover un item
    const removerItem=(idItem)=>{
        const remover = carrito.filter((producto)=>producto.id!==idItem)
        setcarrito(remover)
    }
    return(
        <ContextoCarrito.Provider value={{ limpiarCarrito, removerItem,lproductos, setlproductos, carrito, setcarrito, aniadirAlCarrito, actualizarCarritoCantidad}}>
        {children}
    </ContextoCarrito.Provider>
)
}

