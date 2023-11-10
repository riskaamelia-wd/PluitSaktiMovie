import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import Beranda from './pages/Beranda'
import DetailFilm from './pages/DetailFilm'
import axios from 'axios'
import SedangTayang from './pages/SedangTayang'
import Terpopuler from './pages/Terpopuler'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mendatang from './pages/Mendatang'
import Genre from './pages/Genre'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
    <div style={{backgroundColor:'#090617'}}>
      <BrowserRouter>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Beranda/>}/>
          <Route path='detailFilm' element={<DetailFilm/>}/>
          <Route path='sedangTayang' element={<SedangTayang/>}/>
          <Route path='terpopuler' element={<Terpopuler/>}/>
          <Route path='mendatang' element={<Mendatang/>}/>        
          <Route path='genre/:tag' element={<Genre/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      
    </div>
        <Footer/>
    </div>
  )
}

export default App
