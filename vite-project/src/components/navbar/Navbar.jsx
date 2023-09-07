import './styles.css'
import ItemListContainer from './ItemlistContainer'
import Logo from './logo'
import CartWidget from './CartWidget'
CartWidget
const Navbar = ()=>{
    return(
        <div className='navbar'>
            <Logo/>
            <ItemListContainer greeting='Hola, bienvenidos!'/>
            <CartWidget/>
        </div>
    )
}
export default Navbar