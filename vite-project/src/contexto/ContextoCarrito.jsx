import { createContext, useState } from "react";
export const ContextoCarrito= createContext()
import productos from "../components/main";

export const CartProvider=({children})=>{

    const [carrito, setcarrito]= useState([])
    const[lproductos,setlproductos]= useState([])

    const aniadirAlCarrito = (idProducto) => {
        const productoExistente=carrito.find((producto)=>producto.id===idProducto)

        if (productoExistente) {
              // si el producto ya está en el carrito aumenta su cantidad
            setcarrito((prevCarrito) => {
                return prevCarrito.map((producto) =>
                producto.id === idProducto
                ?{
                    ...producto,
                    cantidad: producto.cantidad < producto.stock ? producto.cantidad + 1 : producto.cantidad,
                }
                : producto
            )
            })
        } else {
            // si el producto no está en el carrito, se agrega con cantidad 1
            const producto = productos.find((producto) => producto.id === idProducto)
            if (producto) {
            setcarrito((prevCarrito) => [...prevCarrito, { ...producto, cantidad: 1 }])
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

    return(
        <ContextoCarrito.Provider value={{ lproductos, setlproductos, carrito, setcarrito, aniadirAlCarrito, actualizarCarritoCantidad}}>
        {children}
    </ContextoCarrito.Provider>
)
}