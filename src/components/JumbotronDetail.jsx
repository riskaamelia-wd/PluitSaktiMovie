import Jumbotron from "./Jumbotron"

const JumbotronDetail = ({list1,list2,list3, h1, tag, year, time, rate, desc, actor, img}) => {
    return(
        <div className="d-flex flex-row">
            <div 
                className="col-sm-4 col-lg-3" 
                // style={{width:'333px', height:'500px'}}
            >
                <img src={img} width={'100%'} alt="" />
            </div>
            <Jumbotron
                list1={list1}
                list2={list2}
                list3={list3}
                h1={h1}
                tag={tag}
                year={year}
                time={time}
                rate={rate}
                desc={desc}
                actor={actor}
                className={'col-9 ms-5 col-sm-12'}
            />
        </div>
    )
}
export default JumbotronDetail