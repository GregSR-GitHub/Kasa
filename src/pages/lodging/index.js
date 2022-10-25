import { useParams } from 'react-router-dom'
import LocationList from '../../datas/datas.json';
import Dropdown from '../../components/dropdown';
import Gallery from '../../components/gallery';
import './lodging.css';

function Lodging() {
    const { idLodging } = useParams()
    const lodgingFilterByID = LocationList.filter(lodging => lodging.id === idLodging);
    const lodgingDatas = lodgingFilterByID[0];
    // const lodgingEquipements = lodgingDatas.equipments.map((plant) => (<span>{plant}</span>));

    return (
        <div className='lodging'>
            <Gallery img={lodgingDatas.pictures} />
            <div className='lodging-info_header'>
               <div>
                    <h1>{ lodgingDatas.title }</h1>
                    <span>{ lodgingDatas.location }</span>
                </div> 
                <div className='host'>
                    <span  className='host-name'>{ lodgingDatas.host.name }</span>
                    <img src={lodgingDatas.host.picture} alt={ lodgingDatas.host.name }  className='host_picture'/>
                </div>
            </div>
            <div className='info_dropdowns'>
                <div  className='info_dropdowns_section'><Dropdown title='Description' text={ lodgingDatas.description } /></div>
                <div  className='info_dropdowns_section'><Dropdown title='Equipements' text={ lodgingDatas.equipments.map((equipement, index) => (<span key={`${equipement}-${index}`}>{equipement}</span>)) }  /></div>
            </div>
        </div>
    )
}
 
export default Lodging