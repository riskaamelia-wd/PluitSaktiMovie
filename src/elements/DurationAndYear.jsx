const DurationandYear = ({year,time}) => {
    return(
        <div className="d-flex flex-row gap-1">
            <p>{year}</p>
            <span  className='pe-1 ps-1'>I</span>
            <p>{time}</p>
        </div>
    )
}
export default DurationandYear