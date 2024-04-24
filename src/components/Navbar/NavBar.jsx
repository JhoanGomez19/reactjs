import CartWidget from "./CartWidget";
import './navbar.css'
const NavBar = () => {

    return (
        <div className="nav-bar">
            <div className="contenedor-imagen">
                <img style={{width: '100px'}} src="https://seeklogo.com/images/N/Nissan-logo-8629FD163E-seeklogo.com.png"/>
            </div>
            <ul className="lista">
                <li>Autos 0 kilometro</li>
                <li>Autos Street</li>
                <li>Autos Usados</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar