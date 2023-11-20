import axios from "axios";
import Button from "../elements/Button"
import Card2 from "../elements/Card2"
import { useEffect, useState } from "react";
import { baseImgUrl, baseUrl, header } from "../utils/FetchApi";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Carousel = () => {
    const location = useLocation()
    const movieID = location.pathname.split('/').pop()
    const [data, setData] = useState([])  
    const [currentPage, setCurrentPage] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const cardsPerPage = isMobile ? 3 : (isTablet ? 4 : 6);


    const handleNext = () => {
        const lastPage = Math.ceil(data.length / cardsPerPage) - 1;
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

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
        <div className="mt-5 mb-4 col-12 container">
            <div className="d-flex justify-content-between ">
                <h3 className="fw-bold mb-4">Dibintangi Oleh</h3>
                <div className="">
                    <Button
                        className={'me-1'}
                        iconLeft={'bi bi-chevron-left fs-5 m-2'}
                        onClick={handlePrev}
                    />
                    <Button
                        className={'ms-1'}
                        iconRight={'bi bi-chevron-right fs-5 m-2'}
                        onClick={handleNext}
                    />
                </div>
            </div>
            <div className="col-12 row">
            {data.length > 0 ? (
                data.slice(startIndex, endIndex).map((item, index) => (
                    <Card2
                        key={index}
                        character={item.character}
                        name={item.name}
                        img={`${baseImgUrl}/${item.profile_path}`}
                    />
                ))
            ) : (
                <p>No Data</p>
            )}
        </div>
            {/* <div className="overflow-x-scroll d-flex flex-nowrap  flex-row col-12 row">
                {data.length > 0 ? (
                    data?.map((item)=>(
                        <Card2
                            character={item.character}
                            name={item.name}
                            key={item.id}
                            img={`${baseImgUrl}/${item.profile_path}`}
                            // character={data[currentIndex].character}
                            // name={data[currentIndex].name}
                            // img={`${baseImgUrl}/${data[currentIndex].profile_path}`}
                       
                        />
                    ))
                ):(
                    <p>No Data</p>
                )

                }
            </div> */}
        </div>
    )
}
export default Carousel