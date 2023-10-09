import { Link } from 'react-router-dom'

const ItemListContainer=({ greeting })=>{

    return(
    <div className="items">
        <h3>{greeting}</h3>
        <ul className='navLi'>
            <li>
                {/* si remplazo la etiqueta <a> por una <Link to={'/}> salta unos errores en consola */}
                <a href="/">Home</a>
            </li>
            <li><a href='/categoria/celulares'>Celulares</a></li>
            <li><a href="/categoria/computadoras">Computadoras</a></li>
            <li><a href="/categoria/tablets">Tablets</a></li>
            <li><a href="/categoria/televisores">Televisores</a></li>
        </ul>
    </div>
    )
}
export default ItemListContainer