import React, { useContext } from 'react'
import { ContextoCarrito } from '../../contexto/ContextoCarrito'
import styles from './ResumenCompra.css'

const ResumenCompra = () => {
    const { carrito } = useContext(ContextoCarrito)

    // Función para calcular el precio total de un producto en el carrito
    const calcularPrecioTotal = (producto) => {
        return producto.precio * producto.cantidad
    };

    // Función para calcular el precio total de la compra
    const calcularPrecioTotalCompra = () => {
        return carrito.reduce((total, producto) => total + calcularPrecioTotal(producto), 0)
    }

    return (
        <div>
            <h2>Resumen de la Compra</h2>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                            <td>${producto.precio}</td>
                            <td>${calcularPrecioTotal(producto)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total de la Compra: ${calcularPrecioTotalCompra()}</p>
        </div>
    )
}

export default ResumenCompra
