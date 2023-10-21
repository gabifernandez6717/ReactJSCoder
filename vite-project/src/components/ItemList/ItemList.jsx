import Item from "../Item/Item"
import './itemList.css'
const ItemList =({productos})=>{
    return(
        <div className="container">
            {productos.map((producto)=>{
                return<Item key={producto.id}{...producto}/>
            })}
        </div>
    )
}
export default ItemList