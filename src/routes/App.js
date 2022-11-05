import Home from '../pages/home/index';
import Lodging from '../pages/lodging/index';
import About from '../pages/about/index';
import Error from '../pages/error/index';
import Header from '../layouts/header/index';
import Footer from '../layouts/footer/index';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'

function App() {
    return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} /> 
        <Route path="/lodging/:idLodging"  element={<Lodging />} /> 
        <Route exact path="/" element={<Home />} />
        <Route path="/error" element={<Error />} /> 
        <Route path="*"  element={<Error />} />
      </Routes>
      <Footer />  
    </Router>
)}

export default App;
