import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './inc/Navbar';
import Kotisivu from './inc/Kotisivu';
import Footer from './inc/Footer';
import Yhteystiedot from './inc/Yhteystiedot';
import TietoaMeista from './inc/TietoaMeista';

function App() {
  return (
<div>
  <Navbar/>
    

  <div className="container">
        <Switch>
          <Route path="/" component={Kotisivu} exact />
          <Route path="/inc/Yhteystiedot" component={Yhteystiedot} />
          <Route path="/inc/TietoaMeista" component={TietoaMeista} />
        </Switch>
      </div>

    <Footer />
</div>
  );
}

export default App;
