import Search from "../elements/Search"
import logo from '../assets/logo-red.svg'
import { NavLink } from "react-router-dom";

const Navbar = ({img, value, onChange}) => {
    return(
        <div className="d-flex flex-row justify-content-between p-3 mb-5">
            <div  className="d-flex flex-row col-5 col-lg-8">
                <NavLink to={'/'}>
                    <img
                        // style={{width:'162px'}} 
                        src={logo} 
                        alt="" />
                </NavLink>
                <div className="d-flex flex-row mt-3 gap-3">
                    <NavLink className="nav-link" to={"/sedangTayang"}>Sedang Tayang</NavLink>
                    <NavLink className="nav-link" to={"/terpopuler"}>Terpopuler</NavLink>
                    <NavLink className="nav-link" to={'/mendatang'}>Mendatang</NavLink>
                </div>
            </div>
            <div className="col-3">
                <Search
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}
export default Navbar