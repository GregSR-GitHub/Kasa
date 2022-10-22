import arrow from '../../assets/arrow.png';
import './dropdown.css';
import { useState } from 'react'
 
function Dropdown({title, text}) {
    const [isOpen, setIsOpen] = useState(0)
    return (
        <div className='dropdown'>
            <div className='dropdown_title' onClick={() => setIsOpen(isOpen + 1)}>
                {title}
                <img  className='dropdown_arrow' src={arrow} alt="Open" style={isOpen%2 ? ({transform: 'rotate(180deg)'}) : null}/>
            </div>
            {isOpen%2 ? (<div className='dropdown_text'>{text}</div>) : null}
            
        </div>
    )
}

export default Dropdown