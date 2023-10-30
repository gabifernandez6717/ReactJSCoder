import { useParams } from "react-router-dom"
import DetalleProducto from "../DetalleProducto/DetalleProducto"
import { useEffect, useState } from "react"
import { db } from "../../db/db"
import {  doc, getDoc } from "firebase/firestore"

const DetalleProductoContenedor=()=>{
    const [producto, setproducto]= useState(null)
    const {itemId}=useParams()


    useEffect(()=>{
        const referenciaProducto=doc(db, "productos", itemId)
        //getdoc para obtener un unico producto
        getDoc(referenciaProducto).then((response)=>{
            //verificar si existe
            if (response.exists()) {
                const producto={id: response.id, ...response.data()}
                setproducto(producto)
            } else {
                console.log('el producto no existe')
            }
        })

    },[itemId])
    return(
        <>
        <DetalleProducto {...producto}/>
        </>
    )
}
export default DetalleProductoContenedor

