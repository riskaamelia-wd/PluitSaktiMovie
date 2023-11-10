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

const Beranda = () =>{
     const [data, setData] = useState([])
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
    useEffect(() => {
        const fetchData = async () => {
            872585
            try {
               
                    const response = await axios.get(`${baseUrl}/movie/609681?language=en-US`, {
                        headers: {
                            'Authorization': `${header}`
                        }
                    });
                    setTitle(response.data)
                    console.log(response.data);
                
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const navigate = useNavigate()
    return(
        <>
         <div>
            <Jumbotron
                bgImg={`${baseImgUrl}/${title?.backdrop_path}`}
                h1={title?.title}
                list={title?.genres}
                tag={'16+'}
                time={'2j 30m'}
                year={title?.release_date ? title.release_date.substring(0, 4) : ""}
                rate={'9.0'}
                desc={title?.overview}
                actor={'Winona Ryder, David Harbour, Millie Bobby Brown'}
            />
            <Category
                img={img}
                text={'Sedang Populer'}
                navLink={'/sedangTayang'}
                id={6}
            />
            <Category
                img={img}
                text={'Terpopuler'}
                navLink={'/terpopuler'}
                id={6}
            />
            <Category
                img={img}
                text={'Mendatang'}
                navLink={'/mendatang'}
                id={6}
            />
            <div className="col-10 pt-3 pb-5 container">
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