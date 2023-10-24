
import { useParams } from "react-router-dom"
import DetalleProducto from "../DetalleProducto/DetalleProducto"
import { obtenerProductosId } from "../main"
import { useEffect, useState } from "react"

const DetalleProductoContenedor=()=>{
    const [producto, setproducto]= useState(null)
    const {itemId}=useParams()

    useEffect(()=>{
        obtenerProductosId(itemId)
        .then(response =>{
            setproducto(response)
        })
        .catch(err=>{
            console.error(err)
        })
    },[itemId])
    return(
        <>
        <DetalleProducto {...producto} />
        </>
    )
}
export default DetalleProductoContenedor

