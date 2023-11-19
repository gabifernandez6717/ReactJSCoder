import { useContext } from 'react'
import './cartWidget.css'
import { ContextoCarrito } from '../../contexto/ContextoCarrito'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { carrito } = useContext(ContextoCarrito)

    // Calcular la cantidad total de ítems en el carrito
    const cantidadTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0)

    return (
        <div>
            <Link to={`/cart`}>
                <img src="../../../public/imgs/carritoDeCompras.png" alt="Carrito de compras" className="btn" />
            </Link>
            <p className="contador">{cantidadTotal}</p>
        </div>
    )
}

export default CartWidget
