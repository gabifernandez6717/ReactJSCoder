import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cargando from '../../pages/cargando/paginaCargando'
import ItemList from '../ItemList/ItemList'
import { obtenerProductos, obtenerProductosCategoria } from '../main'
import './itemListContainer.css'

const ItemListContainer=({greeting})=>{
    const [cargando, setcargando]=useState(true)
    const[productos, setproductos]=useState([])
    const {categoria}=useParams()

    useEffect(()=>{
        const funcionAsincrona=categoria
        ?
        (
            obtenerProductosCategoria
        )
        :
        (
            obtenerProductos
        )

        funcionAsincrona(categoria)
        .then((response)=>{
            console.log(response)
            setproductos(response)
        .catch(err=>{
            console.error(err)
        })
        })
    },[categoria])

    useEffect(()=>{
        setTimeout(()=>{
            setcargando(false)
        }, 1000)
    },[])

    return(
    <div className="container">
        {cargando?(
            <>
            <Cargando/>
            </>
        ):(
            <>
            <div className='nombreEcomerce'>
                <h1>{greeting}</h1>
            </div>
            <ItemList productos={productos}/>
            </>
        )
        }
    </div>
    )
}
export default ItemListContainer