import { NavLink } from "react-router-dom"

const Button = ({iconLeft, iconRight, text, type, className, id, onClick, navLink}) => {
    return(
        <NavLink to={navLink}>
            <button
                type={type ? type : "button"}
                className={className ? `btn ${className}` : "btn ps-4 pe-4 p-2 btnHover"}
                style={{backgroundColor:'var(--danger)'}}
                id={id}
                onClick={onClick}
            >
                {
                    iconLeft &&
                    <i className={iconLeft}></i>
                }
                {text && <span>{text}</span>}
                {
                    iconRight &&
                    <i className={iconRight}></i>
                }
            </button>
        </NavLink>
    )
}

export default Button