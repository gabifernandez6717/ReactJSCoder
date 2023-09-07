import { useState } from "react"

const Contador= ()=>{
const [count, setCount]= useState(0)
const handCount=()=> setCount(count+ 1)
    return(
        <div>
            {count}
            <hr />
            <button onClick={handCount}>sumar</button>
        </div>
    )
}

export default Contador