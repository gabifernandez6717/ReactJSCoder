import { createContext, useState } from "react";
export const ContextoCarrito= createContext()
import productos from "../components/main";

export const CartProvider=({children})=>{

    const [carrito, setcarrito]= useState([])
    const[lproductos,setlproductos]= useState([])

    const aniadirAlCarrito=(idProducto)=>{
        const findProducto=productos.find((producto)=>producto.id===idProducto)
    setcarrito((prevCarrito) => [...prevCarrito, findProducto])
    if (carrito.find(producto=>producto.id===idProducto)){
        const actualizarCarrito=carrito.map(producto=>producto.id===idProducto
            ? {...producto, quantity: producto.quantity < producto.stock ? producto.quantity + 1 : producto.quantity}: producto
            )
    
            setcarrito(actualizarCarrito)
        }
        setcarrito([...carrito,{...findProducto,quantity:1}])
    }
return(
    <ContextoCarrito.Provider value={{ lproductos, setlproductos, carrito, setcarrito, aniadirAlCarrito}}>
        {children}
    </ContextoCarrito.Provider>
)
}