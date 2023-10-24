import { useContext } from "react"
import { ContextoCarrito } from "../../contexto/ContextoCarrito"
const Cart=()=>{
    const{carrito}=useContext(ContextoCarrito)
    return (
        <>
            {
                carrito.length>0
                ?(
                    carrito.map((producto)=>{
                        return<div key={producto.id}>
                                    <h1 style={{color:'black'}}>{producto.nombre}</h1>
                                    <img src={producto.imagen} alt={producto.nombre} />
                                    <h3>cantidad: {producto.cantidad}</h3>
                                    <h2 >Precio: ${producto.precio}</h2>
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


