import bg from '../assets/bg.svg'
import Button from '../elements/Button'
import DurationAndYear from '../elements/DurationandYear'
import Tag from '../elements/Tag'
const Jumbotron = ({list1,list2,list3, h1, tag, year, time, rate, desc, actor, className}) => {
    return(
        // <div style={{background:`url(${bg})`,backgroundSize:'cover', opacity:'0.8'}}>
            <div>
                <div className={className? `${className}` :`col-11 m-auto p-4`}>
                <div>
                    <ul className='flex-row d-flex gap-4'>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                    </ul>
                </div>
                <h1 style={{fontSize:'64px'}}>{h1}</h1>
                <Tag
                    tag={tag}
                    className={'mb-3 mt-2'}
                />
                <div className='d-flex flex-row'>
                    <i className="bi bi-star-fill text-warning" style={{fill:'yellow'}}></i>
                    <p className='me-3 ms-1 fw-bold'>{rate}</p>
                    <DurationAndYear
                        year={year}
                        time={time}
                    />
                </div>
                <p className='fw-bold col-6'>{desc}</p>
                <div className='d-flex flex-row'>
                    <p>Dibintangi : </p>
                    <p className='fw-bold ms-1'>{actor}</p>
                </div>
                <Button
                    iconLeft={'bi bi-eye me-2'}
                    text={'Lihat Film'}
                />
            </div>
            </div>
        // </div>
    )
}
export default Jumbotron