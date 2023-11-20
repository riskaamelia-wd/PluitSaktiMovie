import { useEffect, useState } from 'react'
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
import CariFilm from './pages/CariFilm'
import { baseUrl, header } from './utils/FetchApi'
import FilmSerupa from './pages/FilmSerupa'

function App() {
  const [data, setData] = useState([])  
  const [search, setSearch] = useState('')
      useEffect(() => {
          const fetchData = async () => {
          try {              
                  const response = await axios.get(`${baseUrl}/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, {
                      headers: {
                          'Authorization': `${header}`
                      }
                  });
                  setData(response.data.results)  
                  console.log(data);              
          } catch (error) {
              console.log(error);
          }
      };
     fetchData();
 }, [search]);
  return (
    <div>
    <div style={{backgroundColor:'#090617'}} className='min-vh-100'>
      <BrowserRouter>
      {/* <div className='container'> */}
        <Navbar
          value={search.toLowerCase()}
          onChange={(e) => {
            setSearch(e.target.value.trim());
            }}
        />
        <Routes>
          <Route path='/' element={<Beranda/>}/>
          <Route path='detailFilm/:id' element={<DetailFilm/>}/>
          <Route path='filmSerupa/:id' element={<FilmSerupa/>}/>
          <Route path='sedangTayang' element={<SedangTayang/>}/>
          <Route path='terpopuler' element={<Terpopuler/>}/>
          <Route path='mendatang' element={<Mendatang/>}/>        
          <Route path='genre/:tag' element={<Genre/>}/>
          <Route 
            path='cariFilm' 
            element={
            <CariFilm 
              data={data}
              value={search.toLowerCase()}
              onChange={(e) => {
                setSearch(e.target.value.trim());
                }}
            />
          }
          />
        </Routes>
      {/* </div> */}
      </BrowserRouter>
      
    </div>
        <Footer/>
    </div>
  )
}

export default App
