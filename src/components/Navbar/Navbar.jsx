import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router'

function Navbar() {
    return(
        <div className='navbar-container'>
            <img className='navbar-icon' src="./src/assets/logo.png" alt="logo" />
            <nav className="navbar">
                <ul className="links">
                    <li className="link">Home</li>
                    <li className="link"> <NavLink to={"/contact"}>Contact</NavLink> </li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
        
    )
}

export default Navbar