import { Link } from "react-router-dom"

const Logo =()=>{
    return(
        <div className='logo'>
                {/* si remplazo la etiqueta <a> por una <Link to={'/}> salta unos errores en consola */}
                <Link to={`/`}>
                    <img src="../../../public/imgs/logoApple.jpg" alt="logo" className='imag'/>
                </Link>
        </div>
    )
}
export default Logo