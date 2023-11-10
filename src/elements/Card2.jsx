import img from '../assets/img.svg'

const Card2 = ({}) => {
    return(
        // <div className='mb-5' style={{backgroundColor:"#0F172A"}}>
            <div className="card rounded-3" style={{backgroundColor:"#0F172A"}}>
                <div style={{width:'199px', height:'252px', }}>
                    <img src={img} width={'100%'} className="card-img-top rounded-3" alt="..."/>
                </div>
                <div className="card-body">
                    <p className="card-text m-0 mt-2">Milly Bobby Brown.</p>
                    <p className="card-text">Jane Hopper</p>
                </div>
            </div>
        // </div>
    )
}
export default Card2