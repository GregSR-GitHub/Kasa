import Dropdown from '../../components/dropdown';
import './about.css';

function About() {

    const text_fiabilite = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const text_respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    
    return (
        <div className='about'>
            <div className='banner_about_img'></div>
            <div className='about_dropdown'><Dropdown  title='Fiabilité' text={text_fiabilite} /></div>
            <div className='about_dropdown'><Dropdown className='about_dropdown' title='Respect' text={text_respect} /></div>
            <div className='about_dropdown'><Dropdown className='about_dropdown' title='Service' text={text_fiabilite} /></div>
            <div className='about_dropdown'><Dropdown className='about_dropdown' title='Responsabilité' text={text_fiabilite} /></div>
        </div>
    )
}

export default About;