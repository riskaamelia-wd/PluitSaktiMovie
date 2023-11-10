import axios from "axios";
import { useEffect, useState } from "react";
import { baseImgUrl, baseUrl, header } from "../utils/FetchApi";
import Button from "../elements/Button";
import Card from "../elements/Card";
import { Select } from "../elements/Select";

const ListMovie = ({res, text, label, className, classNameLabel, name, value, options, onSelect}) => {
    const [data, setData] = useState([])
        useEffect(() => {
            const fetchData = async () => {
            try {
                
                    const response = await axios.get(`${baseUrl}/${res}`, {
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
   }, []);

    return(
        <div className="pb-4 container">            
        {text && <h3>{text}</h3>}
        {
            label &&
            <Select
                classNameLabel={classNameLabel}
                label={label}
                className={className}
                name={name}
                value = {value}
                options= {options}
                onSelect={onSelect}
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
            <Button
                text={'Lebih Banyak'}
                iconRight={'bi bi-arrow-repeat ms-2'}
            />
        </div>
    )
}
export default ListMovie