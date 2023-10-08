import { Link } from 'react-router-dom'

const ItemListContainer=({ greeting })=>{
    return(
    <div className="items">
        <h3>{greeting}</h3>
        <ul className='navLi'>
            
            <li><a href="/">Home</a></li>
            
            <li><a href='/categoria/celulares'>Celulares</a></li>
            <li><a href="/categoria/computadoras">Computadoras</a></li>
            <li><a href="/categoria/tablets">Tablets</a></li>
            <li><a href="/categoria/televisores">Televisores</a></li>
        </ul>
    </div>
    )
}
export default ItemListContainer
{/* <li><a href="/"></a>Home</li>
    <li><a href="/categoria/celulares">Celulares</a></li>
    <li><a href="/categoria/computadoras">Computadoras</a></li>
    <li><a href="/categoria/tablets">Tablets</a></li>
    <li><a href="/categoria/televisores">Televisores</a></li>   */}




    // <li><Link to="/">Home</Link></li>
    // <li><Link to="/categoria/celulares">Celulares</Link></li>
    // <li><Link to="/categoria/computadoras">Computadoras</Link></li>
    // <li><Link to="/categoria/tablets">Tablets</Link></li>
    // <li><Link to="/categoria/televisores">Televisores</Link></li>