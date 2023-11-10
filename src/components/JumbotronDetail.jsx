import Jumbotron from "./Jumbotron"

const JumbotronDetail = ({list, h1, tag, year, time, rate, desc, actor, img, bg, navLink}) => {
    return(
        <div className="pb-4 pt-4" style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            opacity: '0.1',
          }}
        ></div>
      
        <div className="container align-items-center d-flex flex-row">
          <div className="col-sm-4 col-lg-3">
            <img src={img} width={'100%'} alt="" />
          </div>
          <Jumbotron
                    list={list}
                    // bgImg={bg}
                    h1={h1}
                    tag={tag}
                    year={year}
                    time={time}
                    rate={rate}
                    desc={desc}
                    actor={actor}
                    className={'col-9 ms-5 col-sm-12'}
                    navLink={navLink}
                />
        </div>
      </div>
      
    )
}
export default JumbotronDetail