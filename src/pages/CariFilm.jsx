import Card from "../elements/Card"
import Search from "../elements/Search"
import { baseImgUrl } from "../utils/FetchApi"

const CariFilm =  ({data, value, onChange}) =>{
    return(
        <div className="container">
            <Search
                value={value}
                onChange={onChange}
            />
            <div className='d-flex flex-row col-12 row m-auto'>
                {
                    data && data?.length > 0 ?(
                        data?.map(item => (
                            <div className="col-md-3 pe-1 col-4 col-lg-2">
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
export default CariFilm