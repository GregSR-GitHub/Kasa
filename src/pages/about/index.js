import Dropdown from '../../components/dropdown';
import './about.css';

function About() {

    const text_fiabilite = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const text_respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    
    return (
        <div className='about'>
            <div className='banner_about_img'></div>
            <Dropdown title='Fiabilité' text={text_fiabilite} />
            <Dropdown title='Respect' text={text_respect} />
            <Dropdown title='Service' text={text_fiabilite} />
            <Dropdown title='Responsabilité' text={text_fiabilite} />
        </div>
    )
}

export default About;