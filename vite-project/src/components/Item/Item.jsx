import { Link } from 'react-router-dom';
import productos from '../main';

const Item = () => {
return (
    <div >
        {productos.map((producto) => (
        <div style={{border: "3px solid black"}} key={producto.nombre}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p>$ {producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <Link to={`/detalle/${producto.id}`}>Ver detalles</Link>
        </div>
    ))}
    </div>
);
};


export default Item