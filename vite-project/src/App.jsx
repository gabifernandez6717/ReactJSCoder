import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Navigation from './routes/Navigation'
import Cargando from './pages/cargando/paginaCargando'

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
          <><Cargando/></>
        ):(
          <Navigation/>
        )}
    </div>
  )
}
export default App