import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ItemListContainer, DetalleProductoContenedor, Cart, Navbar, Checkout } from '../pages'
import { CartProvider } from '../contexto/ContextoCarrito'

const Navigation=()=>{

return <CartProvider>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<ItemListContainer greeting={'TechnoStore'}/>} />
            <Route path='/categoria/:categoria'element={<ItemListContainer greeting={'TechnoStore'}/>}/>
            <Route path='/item/:itemId'element={<DetalleProductoContenedor/>}/>
            <Route path='/cart'element={<Cart/>}/>
            <Route path='/checkout'element={<Checkout/>}/>
            <Route path='*'element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
    </BrowserRouter>
</CartProvider>


}
export default Navigation