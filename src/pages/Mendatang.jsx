import ListMovie from "../components/ListMovie";

const Mendatang = () => {
    return(
        <div >
            <ListMovie
                res={'/movie/upcoming?language=en-US'}
                text={'Mendatang'}
            />
        </div>
    )
}

export default Mendatang