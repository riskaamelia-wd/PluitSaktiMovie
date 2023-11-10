import ListMovie from "../components/ListMovie"

const Terpopuler = ({}) => {
    return(
        <div>
            <ListMovie
                text={'Terpopuler'}
                res={'/movie/popular?language=en-US'}
            />
        </div>
    )
}
export default Terpopuler