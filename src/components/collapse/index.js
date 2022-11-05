import arrow from '../../assets/arrow.png';
import './collapse.css';
import { useState } from 'react'
 
function Collapse({title, text}) {
    const [isOpen, setIsOpen] = useState(0)
    return (
        <div className='collapse'>
            <div className='collapse_title' onClick={() => setIsOpen(isOpen + 1)}>
                {title}
                <img  className='collapse_arrow' src={arrow} alt="Open" style={isOpen%2 ? ({transform: 'rotate(180deg)'}) : null}/>
            </div>
            {isOpen%2 ? (<div className='collapse_text'>{text}</div>) : null}
            
        </div>
    )
}

export default Collapse