import Footer from "../components/Footer"
import ListMovie from "../components/ListMovie"
import Navbar from "../components/Navbar"

const Terpopuler = ({}) => {
    return(
        <div>
            <ListMovie
                text={'Terpopuler'}
                res={'/trending/movie/day'}
            />
        </div>
    )
}
export default Terpopuler