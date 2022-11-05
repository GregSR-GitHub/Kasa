import { useParams, Navigate  } from 'react-router-dom'
import LocationList from '../../datas/datas.json';
import Collapse from '../../components/collapse';
import Gallery from '../../components/gallery';
import Tags from '../../components/tags';
import Rating from '../../components/rating';
import Host from '../../components/host';
import './lodging.css';

function Lodging() {
    const { idLodging } = useParams()
    const lodgingFilterByID = LocationList.filter(lodging => lodging.id === idLodging);
    const lodgingDatas = lodgingFilterByID[0];
    if(!lodgingDatas){
        return (<Navigate to="/error" replace />)
    }
    return (
        <div className='lodging'>
            <Gallery img={lodgingDatas.pictures} />
            <div className='info_header'>
                <h1>{ lodgingDatas.title }</h1>
                <span>{ lodgingDatas.location }</span>
                <Host picture={lodgingDatas.host.picture} name={lodgingDatas.host.name} />
                <div  className='info_tag-rating'>
                    <Tags tagsList={lodgingDatas.tags} />
                    <Rating rating={lodgingDatas.rating}/>
                </div>
            </div>
            <div className='info_collapse'>
                <div  className='info_collapse_section'><Collapse title='Description' text={ lodgingDatas.description } /></div>
                <div  className='info_collapse_section'><Collapse title='Equipements' text={ lodgingDatas.equipments.map((equipement, index) => (<span key={`${equipement}-${index}`}>{equipement}</span>)) }  /></div>
            </div>
        </div>
    )
}
 
export default Lodging