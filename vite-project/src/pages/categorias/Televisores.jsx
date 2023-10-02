import { Link } from "react-router-dom";
import productos from "../../components/main"
import CounterComponent from "../../hooks/CounterComponent";
const Televisores =()=>{
    const televisoresProducts = productos.filter(
        (producto) => producto.categoria === "televisores"
        );
    return (
        <div
        style={
            {
                padding:"10px",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                flexWrap:"wrap", }}
                >
            {televisoresProducts.map((producto) => (
                <div key={producto.nombre} style={
                    {
                        border:"3px solid black",
                        margin:"5px"
                    }
                }>
                <img src={producto.imagen} alt={producto.nombre} />
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>$ {producto.precio}</p>
                <p>stock: {producto.stock}</p>
                <CounterComponent/>
                <button style={
                    {
                        fontSize:"30px",
                        color:"white",
                        padding:"5px",
                        margin:"15px",
                        backgroundColor:"blue"
                    }
                }>Añadir al carrito</button>
                <Link style={
                    {
                        fontSize:"30px",
                        backgroundColor:"blue",
                        color:"white",
                        padding:"8px",
                        margin:"10px"
                    }
                } to={`/detalle/${producto.id}`}>Ver detalles</Link>
            </div>
        ))}
        </div>
    );
}
export default Televisores