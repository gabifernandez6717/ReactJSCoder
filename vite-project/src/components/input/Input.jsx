const Input=({valor})=>{
    return(
        <input onChange = { (event) => valor (event.target.value) }/>
    )
}
export default Input