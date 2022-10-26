import arrowLeft from '../../assets/arrow_left.png';
import arrowRight from '../../assets/arrow_right.png';
import { useState } from 'react'
import './gallery.css';
 
function Gallery({img}) {
    const [currentImg, setCurrentImg] = useState(0)
    const totalImg = img.length;
    return (
        <div className='gallery' style={{
            backgroundImage: ` url("${img[currentImg]}") ` }}>
                { img.length > 1 ? <img className='arrow_side' src={arrowLeft} alt="Left" onClick={() => (currentImg === 0) ? setCurrentImg(img.length-1) : setCurrentImg(currentImg - 1)}/> : null}
                <span className='gallery_counter'>{currentImg+1}/{totalImg}</span>
                { img.length > 1 ? <img className='arrow_side' src={arrowRight} alt="Right"  onClick={() => (currentImg === (img.length-1)) ? setCurrentImg(0) : setCurrentImg(currentImg + 1)}/> : null}
            </div>
    )
}

export default Gallery