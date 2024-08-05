import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useState } from "react";
import { GiFingernail } from "react-icons/gi";


function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="navbar">
        <nav>
            <div className="logo">
            <Link to='/' className="title">
            <h1>Nailed It!</h1>
                <img src="./logoicon.png" alt="" />
            </Link>
            </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
            </div>
        <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
        </ul>
        </nav>
        </div>
    )
}

export default Navbar;