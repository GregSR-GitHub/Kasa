import './banner.css';

function Banner({text,img}) {
  return (
      <div className='banner' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.31),rgba(0, 0, 0, 0.3)), url("${img}") ` }}>{text}</div>
  );
}

export default Banner;