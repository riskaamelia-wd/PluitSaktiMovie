import Footer from "../components/Footer"
import ListMovie from "../components/ListMovie"
import Navbar from "../components/Navbar"

const Terpopuler = ({}) => {
    return(
        <>
            <Navbar/>
            <ListMovie
                text={'Terpopuler'}
                res={'/movie/popular?language=en-US&page=1'}
            />
            <Footer/>
        </>
    )
}
export default Terpopuler