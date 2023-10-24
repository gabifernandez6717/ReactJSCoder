// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// //barrel
// import { Home, DetalleProducto, Celulares, Tablets, Computadoras, Televisores} from '../pages'
// import DetalleProductoContenedor from '../components/DetalleProductoContenedor/DetalleProductoContenedor'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ItemListContainer, DetalleProductoContenedor, Cart } from '../pages'
import Navbar from '../components/navbar/Navbar'




const Navigation=()=>{

//     const routes=createBrowserRouter([
//         {
//             path: '/',
//             element:<Home/>
//         },
//         {
//             path: '/categoria/celulares',
//             element:<Celulares/>
//         },
//         {
//             path: '/categoria/computadoras',
//             element: <Computadoras/>
//         },
//         {
//             path: '/categoria/tablets',
//             element: <Tablets/>
//         },
//         {
//             path: '/categoria/televisores',
//             element: <Televisores/>
//         },
//         {
//             path: "/detalle/:id",
//             element: <DetalleProductoContenedor/>
//         }
//     ])
//     return(
//         <RouterProvider router={routes}/>
//     )


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


}
export default Navigation