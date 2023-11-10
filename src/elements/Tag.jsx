const Tag = ({tag, className, onClick}) => {
    return(
        <>
            <button onClick={onClick}  className={`${className} btn border border-white rounded-pill`} type="button">{tag}</button>
        </>
    )
}

export default Tag