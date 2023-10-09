
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Navigation from './routes/Navigation'
import Cargando from './pages/cargando/paginaCargando'
import ItemList from './components/ItemList/ItemList'

function App() {

  const [cargando, setCargando]= useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 1000);
  }, []);

  return (

    <div>
        <Navbar/>
        {cargando?(
          <>
            <Cargando/>
          </>
        ):(
          <>
          <ItemList>
            <Navigation/>
          </ItemList>
        </>
        )}
    </div>
  )
}
export default App