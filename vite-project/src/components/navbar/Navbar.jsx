import './styles.css'
import ItemListContainer from '../ItemListContainer/ItemlistContainer'
import Logo from './logo'
import CartWidget from '../cartWidget/CartWidget'
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