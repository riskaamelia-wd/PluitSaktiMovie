import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ListMovie from "../components/ListMovie";

const Mendatang = () => {
    return(
        <div >
            <ListMovie
                res={'/movie/upcoming'}
                text={'Mendatang'}
            />
        </div>
    )
}

export default Mendatang