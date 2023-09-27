import { useParams } from 'react-router-dom';
import productos from '../components/main';
const DetalleProducto = () => {
  // Obtiene el id del producto de la URL
    const { id } = useParams();
  const productId = parseInt(id);
    const producto = productos.find((p) => p.id === productId);
    if (!producto) {
    return <div>Producto no encontrado</div>;
    }
    return (
    <div>
        <img src={producto.imagen} alt={producto.nombre} />
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p>$ {producto.precio}</p>
        <p>Stock: {producto.stock}</p>
        <button>Añadir al carrito</button>
    </div>
    );
};

export default DetalleProducto;