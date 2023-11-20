const YearDuration = ({year,time}) => {
    return(
        <div className="d-flex flex-row gap-1">
            <small style={{ fontSize: '0.7rem' }}>{year}</small>
            <small>I</small>
            <small style={{ fontSize: '0.7rem' }}>{time}</small>
        </div>
    )
}
export default YearDuration