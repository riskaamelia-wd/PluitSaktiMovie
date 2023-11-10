import { useEffect, useState } from "react";
import Button from "../elements/Button"
import Card from "../elements/Card"
import axios from "axios";
import { baseImgUrl, baseUrl, header } from "../utils/FetchApi";

const Category = ({text, img,id,   navLink}) => {
    const [data, setData] = useState([])
        useEffect(() => {
            const fetchData = async () => {
                try {
                   
                        const response = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
                            headers: {
                                'Authorization': `${header}`
                            }
                        });
                        setData(response.data.results)
                        console.log(response.data);
                    
                } catch (error) {
                    console.log(error);
                }
            };
    
            fetchData();
        }, []);
    return (        
      <div className="pt-3 pb-3">
        <div className="d-flex flex-row justify-content-between  mb-3">
            <h3>{text}</h3>
            <Button
                text={'Lebih Banyak'}
                iconRight={'bi bi-chevron-right ms-2'}
                navLink={navLink}
            />
        </div>
        <div className='d-flex flex-row col-12 row  m-auto'>
            {
                data?.length > 0 ?(
                    data?.map((item,idx) => (
                        idx < id &&
                            <div className="col-md-4 p-1 col-3 col-lg-2">
                                <Card
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
export default Category