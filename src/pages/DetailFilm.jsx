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
import Button from "../elements/Button"

const DetailFilm = () => {
    const location = useLocation()
    const movieID = location.pathname.split('/').pop()
    const [movie, setMovie] = useState([])    
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
                
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [movieID]);
    useEffect(() => {
        const fetchData = async () => {
            try {
               
                    const response = await axios.get(`${baseUrl}/movie/${movieID}/videos?language=en-US`, {
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
            <div className="container mt-4 mb-4">
                <h3>Plot</h3>
                <p>{data?.overview}</p>
            </div>             
            <div className="container mt-4 mb-4">
                <h3>Videos</h3>
                <div className="vw-70" 
                    style={{
                        height:'40vh',
                        background:`url(${baseImgUrl}/${data?.backdrop_path})`,
                        backgroundSize: '100%',
                        backgroundRepeat:'no-repeat'
                    }}
                >
                    {/* <div className="vw-70" >
                        <img width={'100%'} src={`${baseImgUrl}/${data?.backdrop_path}`} alt="" />
                    </div> */}
                    <div
                        className=" d-flex flex-column justify-content-center align-items-center"
                        style={{
                            paddingTop:'15vh',
                        }}
                    >
                        <Button
                            iconLeft={"bi bi-caret-right-fill"}
                            navLink={`https://www.youtube.com/watch?v=${movie?.key}`}
                            className={'col-12 p-4 ps-5 pe-5 rounded-4'}
                        />
                        <p 
                            className="text-center fs-1 pt-5 mt-lg-5 justify-content-center d-flex align-items-end"
                        
                        >{movie?.type}</p>
                    </div>
                </div>
                {/* <video controls>
                    <source src={`https://www.youtube.com/watch?v=${movie?.key}`} type="video/webm" />
                    Browsermu tidak mendukung tag ini, upgrade donk!
                </video> */}
            </div>           
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