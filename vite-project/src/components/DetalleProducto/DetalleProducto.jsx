import CounterComponent from '../../hooks/CounterComponent'
import './detalleProducto.css'
import Layout from '../layout/layout'

  const DetalleProducto = ({imagen,nombre,descripcion,precio,stock, id}) => {
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
            </div>
          </div>
      </div>
    </Layout>
    )
}
export default DetalleProducto;





