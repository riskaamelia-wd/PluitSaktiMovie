import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseImgUrl, baseUrl, header } from "../utils/FetchApi"
import './style.css'
import { Select } from "../elements/Select"
import Card from "../elements/Card"

const Genre = ({}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [tag, setTag] = useState(location.state.tag);
    const nameGenre = location.state.name
    const [dataGenre, setDataGenre] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {               
                const response = await axios.get(`${baseUrl}//genre/movie/list?language=en`, {
                    headers: {
                        'Authorization': `${header}`
                    }
                });
                setDataGenre(response.data.genres)
                // console.log(response.data);            
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [tag]);
    const genreList = [
        // {value:`${tag}`, text:`${nameGenre}`},
        ...Object.keys(dataGenre)?.map((key) => ({
            value: dataGenre[key]?.id,
            text: dataGenre[key].name,
          })) 
    ];
    const handleChange = (event) => {
        setTag(event.target.value);
        navigate(
            `/genre/${event.target.value}`,{
                state:{
                    tag:event.target.value
                }
            }
        )
      };

      const [data, setData] = useState([])
        useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${tag}`, {
                    headers: {
                        'Authorization': `${header}`
                    }
                });
                setData(response.data.results)                
            } catch (error) {
                console.log(error);
            }
        };
       fetchData();
   }, [tag]);

    return(
        <div>
            {/* <ListMovie
                label={'Genre : '}
                options={genreList}
                name={'genre'}
                res={`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${tag}`}
                onSelect={handleChange}
                className={'form-control-plaintext bg-select fs-4 p-0 fw-semibold col-1'}
                classNameLabel={'col-5'}
            />
             */}
              {
            // label &&
            <Select
                classNameLabel={'col-12 col-lg-5'}
                label={'Genre : '}
                className={'form-control-plaintext bg-select fs-4 p-0 fw-semibold col-1'}
                name={'genre'}
                // value = {value}
                options= {genreList}
                onSelect={handleChange}
            />
        }
            <div className='d-flex flex-row col-12 row m-auto'>
                {
                    data?.length > 0 ?(
                        data?.map(item => (
                            <div className="col-md-4 pe-1 col-3 col-lg-2">
                                <Card
                                key={item.id}
                                idFilm={item.id}
                                time={'1h 53m'}
                                year={item.release_date}
                                img={`${baseImgUrl}/${item.poster_path}`}
                                title={item.title}
                                />
                            </div>   
                        ))
                    ):
                    <p>no data</p>
                }
            </div>
        </div>
    )
}
export default Genre