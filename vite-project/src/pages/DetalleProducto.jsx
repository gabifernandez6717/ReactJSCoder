import { useParams } from 'react-router-dom';
import productos from '../components/main';
import CounterComponent from '../hooks/CounterComponent';
const DetalleProducto = () => {
  // Obtiene el id del producto de la URL
    const { id } = useParams();
  const productId = parseInt(id);
    const producto = productos.find((p) => p.id === productId);
    if (!producto) {
    return <div>Producto no encontrado</div>;
    }
    return (
    <div style={{padding:"10px", display:"flex", flexWrap:"wrap"}}>
        <img src={producto.imagen} alt={producto.nombre} style={{
          width:"600px",
          height:"auto"
        }}/>
        <div>
          <h1 style={{fontSize:"80px", margin:"15px"}}>{producto.nombre}</h1>
          <p style={{fontSize:"30px", margin:"15px"}}>{producto.descripcion}</p>
          <p style={{fontSize:"30px", margin:"15px"}}>$ {producto.precio}</p>
          <p style={{fontSize:"30px", margin:"15px"}}>Stock: {producto.stock}</p>
          <CounterComponent/>
          <button style={{fontSize:"30px", color:"white", padding:"5px", margin:"15px", backgroundColor:"blue"}}>Añadir al carrito</button>
          </div>
    </div>

    );
};

export default DetalleProducto;