import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../pages/home'
import Celulares from '../pages/categorias/Celulares'
import Computadoras from '../pages/categorias/Computadoras'
import Televisores from '../pages/categorias/Televisores'
import Tablets from '../pages/categorias/Tablets'
import DetalleProducto from '../pages/DetalleProducto'

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
            element: <DetalleProducto/>
        }
    ])
    return(
        <RouterProvider router={routes}/>
    )
}
export default Navigation