import Category from "../components/Category"
import Footer from "../components/Footer"
import Jumbotron from "../components/Jumbotron"
import Navbar from "../components/Navbar"
import logo from '../assets/logo-red.svg'
import img from '../assets/img.svg'
import bg from '../assets/bg.svg'
import Carousel from "../components/Carousel"
import Tag from '../elements/Tag'
import axios from "axios"
import { useEffect, useState } from "react"
import { baseImgUrl, baseUrl, header } from "../utils/FetchApi"
import { useNavigate } from "react-router-dom"
import JumbotronDetail from "../components/JumbotronDetail"

const Beranda = () =>{
    const [movie, setMovie] = useState([])    
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
               
                    const response = await axios.get(`${baseUrl}/movie/609681/videos?language=en-US`, {
                        headers: {
                            'Authorization': `${header}`
                        }
                    });
                    setMovie(response.data.results[1])
                    console.log(response.data.results);
                
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
               
                    const response = await axios.get(`${baseUrl}/genre/movie/list?language=en`, {
                        headers: {
                            'Authorization': `${header}`
                        }
                    });
                    setData(response.data.genres)
                
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    
    
    const [title, setTitle] = useState([])
    const [overview, setOverview] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
               
                    const response = await axios.get(`${baseUrl}/movie/609681?language=en-US`, {
                        headers: {
                            'Authorization': `${header}`
                        }
                    });
                    setTitle(response.data)
                    setOverview(response.data.overview)
                
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const navigate = useNavigate()
    const truncateText = (overview, maxLength) => {
        if (title && title.overview && title.overview.length > maxLength) {
          return overview.substring(0, maxLength) + '...';
        }
        return overview; // Return empty string if title or title.overview is undefined
      };
      
      const maxLength = 150;
    return(
        <>
         <div>
            <JumbotronDetail
                bg={`${baseImgUrl}/${title?.backdrop_path}`}
                h1={title?.title}
                list={title?.genres}
                tag={'16+'}
                time={'2j 30m'}
                year={title?.release_date ? title.release_date.substring(0, 4) : ""}
                rate={title?.vote_average}
                desc={truncateText(title?.overview, maxLength)}
                actor={'Winona Ryder, David Harbour, Millie Bobby Brown'}                
                navLink={`https://www.youtube.com/watch?v=${movie?.key}`}
            />
            <Category
                img={img}
                text={'Sedang Tayang'}
                navLink={'/sedangTayang'}
                apiUrl={`${baseUrl}//movie/now_playing?language=en-US`}
            />
            <Category
                img={img}
                text={'Terpopuler'}
                navLink={'/terpopuler'}
                apiUrl={`${baseUrl}/movie/popular?language=en-US`}
            />
            <Category
                img={img}
                text={'Mendatang'}
                navLink={'/mendatang'}
                apiUrl={`${baseUrl}/movie/upcoming?language=en-US`}
            />
            <div className="col-11 pt-3 pb-5 container">
                <h3>Genre Tersedia</h3>
                {
                    data?.length > 0 ? (
                        data?.map((item)=>(
                            <Tag
                                key={item.id}
                                tag={item.name}
                                className={'m-1'}
                                onClick={()=>navigate(
                                    `/genre/${item.name}`,{
                                        state:{
                                            tag:item.id,
                                            name:item.name
                                        }
                                    }
                                )}
                        />
                        ))
                    ):
                    <p>no data</p>
                }
            </div>
            </div>
        </>
    )
}

export default Beranda