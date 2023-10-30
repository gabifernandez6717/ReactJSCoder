import { Link } from "react-router-dom";
import './item.css'

const Item = ({nombre,imagen,descripcion,precio,stock,id}) => {
    return (
        <>
            <div className="item" key={nombre}>
                <img className="img"src={imagen} alt={nombre}/>
                <h2 className="nombre">{nombre}</h2>
                <p className="descripcion">{descripcion}</p>
                <h3 className="precio">{precio}</h3>
                <p className="stock">Stock: {stock}</p>
                <Link  className="Link" to={`/item/${id}`}>Detalles</Link>
            </div>
        </>
    )
}

export default Item