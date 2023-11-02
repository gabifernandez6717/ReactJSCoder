import React from "react";
import useCounter from "./useCounter";
import { ContextoCarrito } from "../contexto/ContextoCarrito";

const CounterComponent=(props) =>{
const { count, increment, decrement, reset } = useCounter(0, props.stock)
const { actualizarCarritoCantidad, aniadirAlCarrito} = React.useContext(ContextoCarrito)

return (
    <>
        { count > 0 ?(
            <div style={{fontSize:"30px"}}>
                <h3 style={{margin:"15px"}}>Cantidad a comprar: {count}</h3>
                <button style={{fontSize:"30px", margin:"15px"}} onClick={()=>{
                    if (count<props.stock){
                        increment()
                    }
                }}>Incrementar
                </button>
                <button style={{fontSize:"30px", margin:"15px"}} onClick={()=>decrement()}>Decrementar</button>
                <button style={{fontSize:"30px", margin:"15px", backgroundColor:"red", color:"white", padding:"5px"}} onClick={()=>reset()}>Resetear</button>
                <button style={{fontSize:"30px", color:"white", padding:"5px", margin:"15px", backgroundColor:"blue", textDecoration:"none"}} to={`/cart`}
                        onClick={()=> {
                            aniadirAlCarrito (props.id)
                            actualizarCarritoCantidad(props.id,count)
                    }}>Añadir al carrito
                </button>
            </div>
            ):(
                <div style={{fontSize:"30px"}}>
                    <h3 style={{margin:"15px"}}>Cantidad a comprar: {count}</h3>
                    <button style={{fontSize:"30px", margin:"15px"}} onClick={()=>{
                        if (count<props.stock){
                            increment()
                        }
                    }}>Incrementar</button>
                    <button style={{fontSize:"30px", margin:"15px"}} onClick={()=>decrement()}>Decrementar</button>
                    <button style={{fontSize:"30px", margin:"15px", backgroundColor:"red", color:"white", padding:"5px"}} onClick={()=>reset()}>Resetear</button>
                </div>
            )
        }
    </>
)


}
export default CounterComponent;