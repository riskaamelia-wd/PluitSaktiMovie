import JumbotronDetail from "../components/JumbotronDetail"
import img from '../assets/img.svg'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Category from "../components/Category"
import Carousel from "../components/Carousel"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseImgUrl, baseUrl, header } from "../utils/FetchApi"

const DetailFilm = () => {
    const location = useLocation()
    const movieID = location.pathname.split('/').pop()
    
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
               
                    const response = await axios.get(`${baseUrl}/movie/${movieID}?language=en-US`, {
                        headers: {
                            'Authorization': `${header}`
                        }
                    });
                    setData(response.data)
                    console.log(response.data);
                
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [movieID]);

    return(
        <div>
            <JumbotronDetail
                img={`${baseImgUrl}/${data?.poster_path}`}
                h1={data?.title}
                list={data?.genres}
                bg={`${baseImgUrl}/${data?.backdrop_path}`}
                key={data?.id}
                tag={'16+'}
                time={'2j 30m'}
                year={data?.release_date ? data.release_date.substring(0, 4) : ""}
                rate={data?.vote_average}
                desc={data?.overview}
                // actor={}
            />            
            <Carousel/>
            <Category
                img={img}
                text={'Film Serupa'}
                id={6}
                navLink={'/sedangTayang'}
            />
        </div>
    )
}

export default DetailFilm