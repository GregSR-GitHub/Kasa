import Collapse from '../../components/collapse';
import Banner from '../../components/banner/index';
import BannerAboutImg from '../../assets/banner_about.png';
import './about.css';

function About() {

    const text_fiability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const text_respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const text_service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const text_responsability = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return (
        <div className='about'>
            <Banner  text="" img={BannerAboutImg}/>
            <div className='about_collapse'><Collapse  title='Fiabilité' text={text_fiability} /></div>
            <div className='about_collapse'><Collapse className='about_collapse' title='Respect' text={text_respect} /></div>
            <div className='about_collapse'><Collapse className='about_collapse' title='Service' text={text_service} /></div>
            <div className='about_collapse'><Collapse className='about_collapse' title='Responsabilité' text={text_responsability} /></div>
        </div>
    )
}

export default About;