import { useContext } from "react"
import { ContextoCarrito } from "../../contexto/ContextoCarrito"
import { Link } from "react-router-dom"
import { addDoc } from "firebase/firestore"
import { orderCollections } from "../../db/db"
const Cart=()=>{

    //orden
    const order={
        buyer:{nombre:"Juan", telefono:"12345678", email:"juancito@gmail.com"},
        items:[{id:4, nombre: "auto", precio:80000}],
        total: 80000
    }
    //añade la orden y consologuea
    const addDocument=()=>{
        addDoc (orderCollections, order)
            .then(res=>console.log(res.id))
            .catch(err=>console.log(err))
    }

    // const updateorder= async()=>{
    //     const getreferenceDocument=doc(db, "orders", "BfNYajlkh0hzFAtoOyJa")
    //     updateDoc(getreferenceDocument, {precio: 85}).then(res=>console.log(res)).catch(err=>console.log(err))
    // }

    const{limpiarCarrito, removerItem, carrito}=useContext(ContextoCarrito)
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
                            <button onClick={addDocument}>
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