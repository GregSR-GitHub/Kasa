import './thumb.css';
import { Link } from 'react-router-dom'
 
function Thumb({title, cover, id}) {
    return (
        <Link to={"/lodging/" + id} className='thumb' style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url("${cover}") ` }}>
            {title}
        </Link>
    )
}

export default Thumb