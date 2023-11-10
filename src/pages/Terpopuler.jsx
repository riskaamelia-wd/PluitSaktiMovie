import Footer from "../components/Footer"
import ListMovie from "../components/ListMovie"
import Navbar from "../components/Navbar"

const Terpopuler = ({}) => {
    return(
        <div>
            <ListMovie
                text={'Terpopuler'}
                res={'/movie/popular?language=en-US&page=1'}
            />
        </div>
    )
}
export default Terpopuler