import CounterComponent from '../../hooks/CounterComponent';
import './detalleProducto.css'
import { useContext, useState } from "react";
import { ContextoCarrito } from '../../contexto/ContextoCarrito';
import { obtenerProductosId } from '../main';
const DetalleProducto = ({imagen,nombre,descripcion,precio,stock, id, cantidad}) => {
  const {aniadirAlCarrito}=useContext(ContextoCarrito)
  
    return (
    <div className='detalleProductoContainer'>
        <img className='imagenDetalle' src={imagen} alt={nombre}/>
        <div>
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
          <p>$ {precio}</p>
          <p>Stock: {stock}</p>
          <div>
          <CounterComponent id={id} stock={stock} nombre={nombre} imagen={imagen} precio={precio} cantidad={cantidad}/>
          <button style={{fontSize:"30px", color:"white", padding:"5px", margin:"15px", backgroundColor:"blue", textDecoration:"none"}} to={`/cart`} 
          onClick={()=>aniadirAlCarrito(id)
                }>Añadir al carrito</button>
          </div>
        </div>
    </div>
    )
}
export default DetalleProducto;





