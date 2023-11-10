// import bg from '../assets/bg.svg'
import Button from '../elements/Button'
import DurationAndYear from '../elements/DurationandYear';
import Tag from '../elements/Tag'

const Jumbotron = ({ list, h1, tag, year, time, rate, desc, actor, className, bgImg, navLink}) => {
  return (
    <div className='pb-3' style={{ position: 'relative' }}>
      {/* Background overlay */}
      {
        bgImg && 
        <div
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url(${bgImg})`,
            backgroundSize: 'cover',
            opacity: '0.3',
            }}
        ></div>
      }
        
      <div>
        <div className={className ? `${className}` : `container m-auto p-4`}>
          <div>
            <ul className='flex-row d-flex gap-4'>
              {list?.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
          <h1 style={{ fontSize: '64px' }}>{h1}</h1>
          <Tag tag={tag} className={'mb-3 mt-2'} />
          <div className='d-flex flex-row'>
            <i className="bi bi-star-fill text-warning" style={{ fill: 'yellow' }}></i>
            <p className='me-3 ms-1 fw-bold'>{rate}</p>
            <DurationAndYear year={year} time={time} />
          </div>
          <p className='fw-bold col-md-8 col-11'>{desc}</p>
          <div className='d-flex flex-row'>
            <p>Dibintangi : </p>
            <p className='fw-bold ms-1'>{actor}</p>
          </div>
          <Button iconLeft={'bi bi-eye me-2'} text={'Lihat Film'} navLink={navLink}/>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
