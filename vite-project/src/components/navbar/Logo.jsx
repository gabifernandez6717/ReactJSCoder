import { Link } from "react-router-dom"

const Logo =()=>{
    return(
        <div className='logo'>
                <Link to={`/`}>
                    <img src="../../../public/imgs/logoApple.jpg" alt="logo" className='imag'/>
                </Link>
        </div>
    )
}
export default Logo