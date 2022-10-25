import './gallery.css';
 
function Gallery({img}) {
    return (
        <div className='gallery' style={{
            backgroundImage: ` url("${img[0]}") ` }}></div>
    )
}

export default Gallery