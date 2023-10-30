import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cargando from '../../pages/cargando/paginaCargando'
import ItemList from '../ItemList/ItemList'
import { obtenerProductos, obtenerProductosCategoria } from '../main'
import './itemListContainer.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../db/db'

const ItemListContainer=({greeting})=>{
    const [cargando, setcargando]=useState(true)
    const[productos, setproductos]=useState([])
    const {categoria}=useParams()


    useEffect(()=>{

        //configuracion de referencia de productos
        const referenciaProductos= collection(db, "productos")
        //getdoc(S) para obtener todos los productos
        getDocs(referenciaProductos).then((response)=>{
            //formateo de data a array de objetos
            const productosFirebase=response.docs.map((product)=>({id: product.id, ...product.data()}))
            //console.log(productosFirebase)

            //se setea productosFirebase en productos
            setproductos(productosFirebase)
        })

        const q=query(referenciaProductos,where("categoria","==", `${categoria}`))
        getDocs(q).then((response)=>{
            //formateo de data a array de objetos
            const productosFirebase=response.docs.map((product)=>(
                {id: product.id, ...product.data()}
            ))
            setproductos(productosFirebase)
        })

        const funcionAsincrona=(categoria)
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
            setproductos(response)
        })
    },[categoria])

    useEffect(()=>{
        setTimeout(()=>{
            setcargando(false)
        }, 2000)
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