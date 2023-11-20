import { useLocation } from "react-router-dom";
import ListMovie from "../components/ListMovie";

const FilmSerupa = () => {
    const location = useLocation()
    const movieID = location.pathname.split('/').pop()
    return(
        <div >
            <ListMovie
                res={`/movie/${movieID}/similar?language=en-US&page=1`}
                text={'Film Serupa'}
            />
        </div>
    )
}

export default FilmSerupa