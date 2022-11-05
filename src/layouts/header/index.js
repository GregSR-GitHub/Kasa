import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png';
import './header.css';
 
function Header() {
    return (
        <header className="header">
            <nav  className="header_nav">
                <NavLink to="/" end><img src={logo} alt="logo" className='logo'/></NavLink>
                <ul  className="Menu">
                    <li><NavLink to="/" className="Menu-link"  end>Accueil</NavLink></li>
                    <li><NavLink to="/about" className="Menu-link">A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header