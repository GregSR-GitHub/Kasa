import logo_small from '../../assets/logo_small.png';
import './footer.css';
 
function Footer() {
    return (
        <footer className='footer'>
            <img src={logo_small} alt="logo" />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer