import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ItemListContainer, DetalleProductoContenedor, Cart } from './pages'
import { CartProvider } from './contexto/ContextoCarrito'
import './App.css'

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'TechnoStore'}/>} />
            <Route path='/categoria/:categoria'element={<ItemListContainer greeting={'TechnoStore'}/>}/>
            <Route path='/item/:itemId'element={<DetalleProductoContenedor/>}/>
            <Route path='/cart'element={<Cart/>}/>
            <Route path='*'element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}
export default App