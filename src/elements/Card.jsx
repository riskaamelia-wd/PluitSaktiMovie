import YearDuration from "./YearDuration"
import { NavLink } from "react-router-dom"

const Card = ({img, year, time, title, idFilm}) => {
    return(
        <NavLink className="p-3" to={`/detailFilm/${idFilm}`}>
            <div  className="bg-secondary">
                <img src={img} width={'100%'} alt="" />
            </div>
            <p className="fw-bold mt-3 mb-1">{title}</p>
            <YearDuration
                year={year}
                time={time}
            />
        </NavLink>
    )
}

export default Card
// style={{width:'199px'}}