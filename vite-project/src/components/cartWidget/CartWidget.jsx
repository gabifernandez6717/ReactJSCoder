import { useContext } from 'react'
import './cartWidget.css'
import { ContextoCarrito } from '../../contexto/ContextoCarrito'
import { Link } from 'react-router-dom'
const CartWidget=()=>{
    const {carrito}=useContext(ContextoCarrito)
    return(
        <div >
                <Link to={`/cart`}>
                        <img src="../../../public/imgs/carritoDeCompras.png" alt="Carrito de compras" className="btn" />
                </Link>
                <p className="contador">{carrito.length}</p>
        </div>
    )
}
export default CartWidget

