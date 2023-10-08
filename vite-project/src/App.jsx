
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Navigation from './routes/Navigation'
import Cargando from './pages/cargando/paginaCargando'
import Input from './components/input/Input'
import ItemList from './components/ItemList/ItemList'
import { Router } from 'react-router-dom'

function App() {

  const [cargando, setCargando]= useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 1000);
  }, []);

  // const handleInput=(e)=>{
  //   console.log(e)
  // }
  return (
    <div>
        <Navbar/>
        {cargando?(
          <>
            <Cargando/>
          </>
        ):(
          <>
          {/* <ItemList>
            <Navigation/>
          </ItemList> */}
          <ItemList>
            <Navigation/>
          </ItemList>
        </>
        )}
    </div>
  )
}
export default App