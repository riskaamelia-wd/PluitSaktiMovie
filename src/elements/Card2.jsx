const Card2 = ({img, character, name}) => {
    return(
        <div className='p-2 m-0 col-lg-2 col-3'>
            <div className="p-0 card rounded-3 " style={{backgroundColor:"#0F172A"}}>
                <div>
                    <img src={img} className="card-img-top m-0 rounded-3" alt="..."/>
                </div>
                <div className="card-body p-0">
                    <p className="card-text m-0 fw-semibold p-1">{name}</p>
                    <p className="fw-light card-text ps-1 pb-2">{character}</p>
                </div>
            </div>
        </div>
    )
}
export default Card2