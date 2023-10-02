import React from "react";
import useCounter from "./useCount";

function CounterComponent() {
const { count, increment, decrement, reset } = useCounter();
return (
    <div style={{fontSize:"30px"}}>
        <h3 style={{margin:"15px"}}>Cantidad a comprar: {count}</h3>
        <button style={{fontSize:"30px", margin:"15px"}} onClick={increment}>Incrementar</button>
        <button style={{fontSize:"30px", margin:"15px"}} onClick={decrement}>Decrementar</button>
        <button style={{fontSize:"30px", margin:"15px", backgroundColor:"red", color:"white", padding:"5px"}} onClick={reset}>Resetear</button>
    </div>
);
}

export default CounterComponent;
