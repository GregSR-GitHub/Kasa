import { Link } from 'react-router-dom'
import './error.css';

function Error() {
    return (
        <div className='error'>
            <h1 className='span404'>404</h1>
            <span className='oups'>Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/" className='error-link'>Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error