import { useContext } from "react"
import { ContextoCarrito } from "../../contexto/ContextoCarrito"
import productos from "../main"
const Cart=()=>{
    const{carrito}=useContext(ContextoCarrito)
    return (
        <>
            {
                carrito.length>0?
                (
                    carrito.map((producto)=>{
                        return<div key={producto.id}>
                                    <h1 style={{color:'black'}}>{producto.nombre}</h1>
                                    <img src={producto.imagen} alt={producto.nombre} />
                                    <p style={{color:'red'}}>Precio: ${producto.precio}</p>
                                    {console.log([...carrito])}
                                </div>
                        })
                ):(
                    <h1 style={{color:'black'}}> Productos: {carrito.length}</h1>
                )
            }
        </>
    )
    }
export default Cart


