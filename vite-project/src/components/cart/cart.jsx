import { useContext, useState } from "react"
import { ContextoCarrito } from "../../contexto/ContextoCarrito"
import { Link } from "react-router-dom"
const Cart=()=>{
    const{limpiarCarrito, removerItem, carrito}=useContext(ContextoCarrito)
    // Función reduce para sumar los precios de los productos en el carrito
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
    return (
        <>
            {
                carrito.length>0
                ?(
                <>
                    {
                        carrito.map((producto)=>{
                            return  <div key={producto.id}>
                                        <h1 style={{color:'black'}}>{producto.nombre}</h1>
                                        <img src={producto.imagen} alt={producto.nombre} />
                                        <h3>cantidad: {producto.cantidad}</h3>
                                        <h2 >Precio: ${producto.precio}</h2>
                                        <button onClick={()=>removerItem(producto.id)}>Eliminar del carrito</button>
                                    </div>
                            })
                    }
                        <div>
                            <button onClick={limpiarCarrito}>
                                Vaciar carrito
                            </button>
                            <h2>
                                Total: ${total}
                            </h2>
                            <button>
                            <Link to={'/checkout'}>
                                Finalizar compra
                            </Link>
                            </button>
                        </div>
                </>
                ):(
                    <h1 style={{color:'black'}}> Productos: {carrito.length}</h1>
                )
            }
        </>
    )
    }
export default Cart