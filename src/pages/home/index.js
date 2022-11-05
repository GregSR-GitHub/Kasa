import './index.css';
import Thumb from '../../components/thumb/index';
import Banner from '../../components/banner/index';
import BannerHomeImg from '../../assets/banner.png';
import LocationList from '../../datas/datas.json';

function Home() {
  return (
    <main className='home'>
      <Banner  text="Chez vous, partout et ailleurs" img={BannerHomeImg}/>
      <div className='lodging_list'>
        { LocationList.map((element, index) => (<Thumb  key={`${element}-${index}`} title={element.title} cover={element.cover}  id={element.id}/>))}
      </div>
    </main>
  );
}

export default Home;
