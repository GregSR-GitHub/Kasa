import Home from '../pages/home/index';
import Lodging from '../pages/lodging/index';
import About from '../pages/about/index';
import Error from '../pages/error/index';
import Header from '../layouts/header/index';
import Footer from '../layouts/footer/index';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'

function App() {
    return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
            <About />
        </Route>  
        <Route path="/lodging/:idLodging">
            <Lodging />
        </Route> 
        <Route exact path="/">
            <Home />
        </Route> 
        <Route>
            <Error />
        </Route>
      </Switch>
      <Footer />  
    </Router>
)}

export default App;
