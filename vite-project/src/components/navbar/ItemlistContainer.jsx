import CartWidget from "./CartWidget"
const ItemListContainer=({ greeting })=>{
    return(
    <div className="items">
        <p>{greeting}</p>
        <ul className='navLi'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Catalogos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Ayuda</a></li>
        </ul>
    </div>
    )
}
export default ItemListContainer