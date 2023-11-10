import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ListMovie from "../components/ListMovie";

const Mendatang = () => {
    return(
        <>
            <Navbar/>
            <ListMovie
                res={'/movie/upcoming?language=en-US&page=1'}
                text={'Mendatang'}
            />
            <Footer/>
        </>
    )
}

export default Mendatang