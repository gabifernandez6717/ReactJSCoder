import { Link } from "react-router-dom"
import productos from "../components/main"
const Home =()=>{
    return(
        <>
        {productos.map((producto)=>{
            return(
                <div style={
                    {
                        margin:"5px"
                    }
                }>
                    <img style={{
                        width:"350px",
                        height:"auto"
        }} src={producto.imagen} alt={producto.nombre} />
                    <div>
                        <h1 style={{fontSize:"45px"}}>{producto.nombre}</h1>
                        <p style={{fontSize:"30px", width:"400px"}}>{producto.descripcion}</p>
                        <br />
                        <h2 style={{fontSize:"35px"}}>$ {producto.precio}</h2>
                        <br />
                        <h2 style={{fontSize:"25px"}}>stock: {producto.stock}</h2>
                    </div>
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
            )
            })}
        </>
    )
}
export default Home