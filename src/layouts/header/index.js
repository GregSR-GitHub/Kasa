import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';
import './header.css';
 
function Header() {
    return (
        <header className="App-header">
            <img src={logo} alt="logo" />
            <nav>
                <ul  className="Menu">
                    <li><Link to="/" className="Menu-link">Accueil</Link></li>
                    <li><Link to="/about" className="Menu-link">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header