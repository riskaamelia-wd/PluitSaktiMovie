import Button from "../elements/Button"
import Card2 from "../elements/Card2"

const Carousel = () => {
    return(
        <div className="mt-5 mb-4">
            <div className="d-flex justify-content-between ">
                <h3 className="fw-bold mb-4">Dibintangi Oleh</h3>
                <div className="">
                    <Button
                        className={'me-1'}
                        iconLeft={'bi bi-chevron-left fs-5 m-2'}
                    />
                    <Button
                        className={'ms-1'}
                        iconRight={'bi bi-chevron-right fs-5 m-2'}
                    />
                </div>
            </div>
            <div className="d-flex flex-row gap-3">
                <Card2/>
                <Card2/>
                <Card2/>
            </div>
        </div>
    )
}
export default Carousel