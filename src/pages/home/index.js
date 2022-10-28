import './index.css';
import Thumb from '../../components/thumb/index';
import LocationList from '../../datas/datas.json';
// import { useEffect } from 'react'

function Home() {
//   useEffect(() => {
//     const locationData = LocationList.JSON.strigify();
//     fetch(locationData, {
//       method: 'POST',
//       body: JSON.stringify(object)
//     })
//          .then((response) => response.json()
//          .then(({ locationData }) => console.log(locationData))
//          .catch((error) => console.log(error))
//      )
//  }, [])
  return (
    <main className='home'>
      <div className='banner_img'>Chez vous, partout et ailleurs</div>
      <div className='lodging_list'>
        { LocationList.map((element, index) => (<Thumb  key={`${element}-${index}`} title={element.title} cover={element.cover}  id={element.id}/>))}
      </div>
    </main>
  );
}

export default Home;
