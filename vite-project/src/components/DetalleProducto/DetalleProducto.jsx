import CounterComponent from '../../hooks/CounterComponent';
import './detalleProducto.css'
import { useContext } from "react";
import { ContextoCarrito } from '../../contexto/ContextoCarrito';
  import Layout from '../layout/layout';


  const DetalleProducto = ({imagen,nombre,descripcion,precio,stock, id}) => {
  const {aniadirAlCarrito}=useContext(ContextoCarrito)

    return (
    <Layout>
      <div className='detalleProductoContainer'>
          <img className='imagenDetalle' src={imagen} alt={nombre}/>
          <div>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <p>$ {precio}</p>
            <p>Stock: {stock}</p>
            <div>
            <CounterComponent stock={stock} id={id}/>
            <button style={{fontSize:"30px", color:"white", padding:"5px", margin:"15px", backgroundColor:"blue", textDecoration:"none"}} to={`/cart`}
            onClick={()=> {
              aniadirAlCarrito(id)
            }
                  }>Añadir al carrito</button>
            </div>
          </div>
      </div>
    </Layout>
    )
}
export default DetalleProducto;





