import { Link } from "react-router-dom"
import productos from "../components/main"
const Home =()=>{
    return(
        <>
        {productos.map((producto)=>{
            return(
                <div key={producto.id}>
                    <img src={producto.imagen} alt={producto.nombre} />
                    <h1>{producto.nombre}</h1>
                    <p>{producto.descripcion}</p>
                    <p>$ {producto.precio}</p>
                    <p>stock: {producto.stock}</p>
                    <Link to={`/detalle/${producto.id}`}>Ver detalles</Link>
                    <button>Añadir al carrito</button>
                </div>
            )
            })}
        </>
    )
}
export default Home