import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//barrel
import { Home, DetalleProducto, Celulares, Tablets, Computadoras, Televisores} from '../pages'
import DetalleProductoContenedor from '../components/DetalleProductoContenedor/DetalleProductoContenedor'

const Navigation=()=>{

    const routes=createBrowserRouter([
        {
            path: '/',
            element:<Home/>
        },
        {
            path: '/categoria/celulares',
            element:<Celulares/>
        },
        {
            path: '/categoria/computadoras',
            element: <Computadoras/>
        },
        {
            path: '/categoria/tablets',
            element: <Tablets/>
        },
        {
            path: '/categoria/televisores',
            element: <Televisores/>
        },
        {
            path: "/detalle/:id",
            element: <DetalleProductoContenedor/>
        }
    ])
    return(
        <RouterProvider router={routes}/>
    )
}
export default Navigation