const ItemList =({children})=>{
    return(
        <div style={{padding:"10px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
            {children}
        </div>
    )
}
export default ItemList