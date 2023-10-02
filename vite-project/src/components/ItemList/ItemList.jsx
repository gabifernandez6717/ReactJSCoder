const ItemList =({children})=>{
    return(
        <div style={{
                width: '100%',
                height: '100%',
                padding:"10px",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                flexWrap:"wrap",
                border: "3px solid black"
            }}>
            {children}
        </div>
    )
}
export default ItemList