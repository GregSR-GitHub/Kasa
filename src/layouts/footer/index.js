import logo_small from '../../assets/logo_small.png';
import './footer.css';
 
function Footer() {
    return (
        <footer className='App-footer'>
            <img src={logo_small} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer