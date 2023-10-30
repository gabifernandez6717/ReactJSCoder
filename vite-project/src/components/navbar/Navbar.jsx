import './styles.css'
import Logo from './Logo'
import CartWidget from '../cartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
CartWidget
const Navbar = ()=>{
    return(
    <>
        <div className='navbar'>
            <Link to={`/`}><Logo/></Link>
            <div>
                <div className='contenedorCategorias'>
                    <NavLink className='categoriasNavbar' to={`/`}>Home</NavLink><br/>
                    <NavLink className='categoriasNavbar' to={`/categoria/celulares`}>Celulares</NavLink><br/>
                    <NavLink className='categoriasNavbar' to={`/categoria/computadoras`}>Computadoras</NavLink><br/>
                    <NavLink className='categoriasNavbar' to={`/categoria/tablets`}>Tablets</NavLink><br/>
                    <NavLink className='categoriasNavbar' to={`/categoria/televisores`}>Televisores</NavLink><br/>
                </div>
            </div>
            <CartWidget/>
        </div>
    </>
    )
}
export default Navbar