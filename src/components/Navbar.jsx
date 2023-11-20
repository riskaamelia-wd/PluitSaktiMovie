import Search from "../elements/Search"
import logo from '../assets/logo-red.svg'
import { NavLink } from "react-router-dom";

const Navbar = ({img, value, onChange}) => {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="  container p-3 mb-5">
                <NavLink className={'col-3 col-lg-2 navbar-brand'} to={'/'}>
                    <img
                        // style={{width:'162px'}} 
                        width={'100%'}
                        src={logo} 
                        alt="" />
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse ">
                <div className="navbar-nav flex-lg-fill d-lg-flex justify-content-lg-between">
                    <div className="nav-item flex-lg-row d-lg-flex mt-3 gap-3">
                        <NavLink className="nav-link" to={"/sedangTayang"}>Sedang Tayang</NavLink>
                        <NavLink className="nav-link" to={"/terpopuler"}>Terpopuler</NavLink>
                        <NavLink className="nav-link" to={'/mendatang'}>Mendatang</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to={'cariFilm'}>
                            <Search
                                value={value}
                                onChange={onChange}
                                />
                        </NavLink>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    )
}
export default Navbar