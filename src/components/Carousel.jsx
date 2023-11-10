import axios from "axios";
import Button from "../elements/Button"
import Card2 from "../elements/Card2"
import { useEffect, useState } from "react";
import { baseImgUrl, baseUrl, header } from "../utils/FetchApi";
import { useLocation } from "react-router-dom";

const Carousel = () => {
    const location = useLocation()
    const movieID = location.pathname.split('/').pop()
    const [data, setData] = useState([])
        useEffect(() => {
            const fetchData = async () => {
                try {
                   
                        const response = await axios.get(`${baseUrl}/movie/${movieID}/credits?language=en-US`, {
                            headers: {
                                'Authorization': `${header}`
                            }
                        });
                        setData(response.data.cast)
                        console.log(response.data.cast);
                    
                } catch (error) {
                    console.log(error);
                }
            };
    
            fetchData();
        }, [movieID]);
    return(
        <div className="mt-5 mb-4 container">
            <div className="d-flex justify-content-between ">
                <h3 className="fw-bold mb-4">Dibintangi Oleh</h3>
                <div className="">
                    <Button
                        className={'me-1'}
                        iconLeft={'bi bi-chevron-left fs-5 m-2'}
                    />
                    <Button
                        className={'ms-1'}
                        iconRight={'bi bi-chevron-right fs-5 m-2'}
                    />
                </div>
            </div>
            <div className="overflow-x-scroll d-flex flex-nowrap  flex-row col-12 row">
                {data.length > 0 ? (
                    data?.map((item)=>(
                        <Card2
                            character={item.character}
                            name={item.name}
                            img={`${baseImgUrl}/${item.profile_path}`}
                        />
                    ))
                ):(
                    <p>No Data</p>
                )

                }
            </div>
        </div>
    )
}
export default Carousel