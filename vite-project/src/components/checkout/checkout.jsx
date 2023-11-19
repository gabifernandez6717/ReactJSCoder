import { addDoc } from "firebase/firestore"
import { orderCollections } from "../../db/db"
import { useEffect, useState } from "react"
import ResumenCompra from "../checkoutForm/CheckoutForm"
const Checkout=()=>{
    const [orderId, setOrderId] = useState(null)
    //orden
    const order={
        buyer:{nombre:"Juan", telefono:"12345678", email:"juancito@gmail.com"},
        items:[{id:4, nombre: "auto", precio:80000}],
        total: 80000
    }
    //añade la orden y consologuea
    const addDocument=()=>{
        addDoc (orderCollections, order)
        .then(res=>{
            setOrderId(res.id)
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        addDocument()
    },[])
    return <>
    <h2 style={{color:'black'}}>
        El ID de su orden es: {orderId}
        <hr />
    </h2>
    <div>
        <ResumenCompra/>
    </div>
    
    </>
    }
export default Checkout