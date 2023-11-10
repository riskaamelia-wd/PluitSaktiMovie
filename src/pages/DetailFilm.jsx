import JumbotronDetail from "../components/JumbotronDetail"
import img from '../assets/img.svg'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Category from "../components/Category"
import Carousel from "../components/Carousel"

const DetailFilm = () => {
    return(
        <>
            <Navbar/>
            <JumbotronDetail
                img={img}
                h1={'Indiana Jones and The Dial Of Destiny'}
                list1={'ADVENTURE'}
                list2={'ACTION'}
                list3={'HISTORY'}
                tag={'16+'}
                time={'2j 30m'}
                year={'2023'}
                rate={'9.0'}
                desc={'Menemukan dirinya berada di era baru, dan mendekati masa pensiun, Indy bergulat dengan dunia yang tampaknya sudah melampaui batasnya. Namun saat tentakel kejahatan yang sangat familiar kembali dalam wujud rival lamanya, Indy harus mengenakan topinya dan mengambil cambuknya sekali lagi untuk memastikan artefak kuno dan kuat tidak jatuh ke tangan yang salah.'}
                actor={'Winona Ryder, David Harbour, Millie Bobby Brown'}
            />            
            <Carousel/>
            <Category
                img={img}
                text={'Film Serupa'}
            />
            <Footer/>
        </>
    )
}

export default DetailFilm