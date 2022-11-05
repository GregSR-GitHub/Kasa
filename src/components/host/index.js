import './host.css';

function Host({picture, name}) {
  return (
            <div className='host'>
                <span  className='host-name'>{ name }</span>
                <img src={picture} alt={name}  className='host_picture'/>
            </div>
  );
}

export default Host;