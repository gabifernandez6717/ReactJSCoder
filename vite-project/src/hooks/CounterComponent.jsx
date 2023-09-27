import React from "react";
import useCounter from "./useCount";

function CounterComponent() {
const { count, increment, decrement, reset } = useCounter();
return (
    <div>
        <h1>cantidad: {count}</h1>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={reset}>Resetear</button>
    </div>
);
}

export default CounterComponent;
