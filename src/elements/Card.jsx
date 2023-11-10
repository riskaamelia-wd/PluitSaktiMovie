import DurationAndYear from "./DurationandYear"
import { NavLink } from "react-router-dom"

const Card = ({img, year, time, title}) => {
    return(
        <NavLink className="p-3" to={'/detailFilm'}>
            <div style={{width:'199px'}} className="bg-secondary">
                <img src={img} width={'100%'} alt="" />
            </div>
            <p className="fw-bold mt-3 mb-1">{title}</p>
            <DurationAndYear
                year={year}
                time={time}
            />
        </NavLink>
    )
}

export default Card