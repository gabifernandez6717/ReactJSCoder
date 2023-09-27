import { Link } from "react-router-dom";
import productos from "../../components/main"
const Televisores =()=>{
    const televisoresProducts = productos.filter(
        (producto) => producto.categoria === "televisores"
        );
    return (
        <div>
            {televisoresProducts.map((producto) => (
                <div key={producto.nombre}>
                <img src={producto.imagen} alt={producto.nombre} />
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>$ {producto.precio}</p>
                <p>stock: {producto.stock}</p>
                <Link to={`/detalle/${producto.id}`}>Ver detalles</Link>
                <button>Añadir al carrito</button>
            </div>
        ))}
        </div>
    );
}
export default Televisores