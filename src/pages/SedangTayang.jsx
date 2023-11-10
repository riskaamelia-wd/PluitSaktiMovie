import ListMovie from "../components/ListMovie";

const SedangTayang = () => {
    return(
        <div>
            <ListMovie
                res={'/movie/now_playing?language=en-US'}
                text={'Sedang Tayang'}
            />
        </div>
    )
}

export default SedangTayang