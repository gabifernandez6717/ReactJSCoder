import { useContext } from "react"
import { ContextoCarrito } from "../../contexto/ContextoCarrito"

const Checkout=()=>{
    const{carrito}=useContext(ContextoCarrito)

    return <>
        <h1>checkout</h1>
    </>}
export default Checkout