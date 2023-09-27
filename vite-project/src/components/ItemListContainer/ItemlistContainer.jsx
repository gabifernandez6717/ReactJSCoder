const ItemListContainer=({ greeting })=>{
    return(
    <div className="items">
        <p>{greeting}</p>
        <ul className='navLi'>
                <li><a href="/">Home</a></li>
            <li><a href="/categoria/celulares">Celulares</a></li>
            <li><a href="/categoria/computadoras">Computadoras</a></li>
            <li><a href="/categoria/tablets">Tablets</a></li>
            <li><a href="/categoria/televisores">Televisores</a></li>
        </ul>
    </div>
    )
}
export default ItemListContainer
