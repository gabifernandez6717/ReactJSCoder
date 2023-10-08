import { Link } from "react-router-dom";
import productos from "../../components/main"
import CounterComponent from "../../hooks/CounterComponent";
import "./styles/stylesProductos.css"

const Televisores =()=>{

    const televisoresProducts = productos.filter(
        (producto) => producto.categoria === "televisores"
        );

    return (

        <div className="contenedorProductos">
            {televisoresProducts.map((producto) => (
                <div className="contenido" key={producto.nombre}>
                <img src={producto.imagen} alt={producto.nombre} />
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>$ {producto.precio}</p>
                <p>stock: {producto.stock}</p>
                <CounterComponent/>
                <button className="aniadirAlCarrito">Añadir al carrito</button>
                <Link className="link" to={`/detalle/${producto.id}`}>Ver detalles</Link>
            </div>
            ))}
        </div>
    );
}
export default Televisores