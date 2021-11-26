import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './inc/Navbar';
import Kotisivu from './inc/Kotisivu';
import Tuoteryhma from './inc/Tuoteryhma';
import Footer from './inc/Footer';
import Yhteystiedot from './inc/Yhteystiedot';
import TietoaMeista from './inc/TietoaMeista';
import UKK from './inc/UKK';
import Palautukset from './inc/Palautukset';
import React, {useState,useEffect} from 'react';

const URL = 'http://localhost/verkkopalveluback/';

// Sivun osat, tehty reitityksellä
function App() {

  //kategorian tilamuutuja
  const [category, setCategory] = useState(null);
  //ostoskorin tilamuuttuja taulukkomuodossa-AK
  const [cart, setCart] = useState([]);
  
  let location = useLocation();

  useEffect(() => {
    if (location.state !==undefined) {
      setCategory({id: location.state.id,name:location.state.name});
    }
  }, [location.state])

  // Localstoragen ostoskorin tilamäärän nollaantumisen esto sivua päivitettäessä -AK
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

//ostoskori-funktio, jota voidaan kutsua eri sivuilla. Saa kotisivulta tuotteen(lisää productin kohdalle)-AK
  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  
  
  
  
  return (
<div>
  <Navbar cart={cart} setCategory={setCategory} url={URL}/>   

  <div className="container">
        <Switch>
          <Route
            path="/Tuotteet"
            render={() => 
              <Tuoteryhma
                url={URL}
                category={category}
              />
            }
          />
          <Route path="/" component={Kotisivu} exact/>
          <Route path="/Yhteystiedot" component={Yhteystiedot}/>
          <Route path="/TietoaMeista" component={TietoaMeista} />
          <Route path="/UKK" component={UKK} />
          <Route path="/Palautukset" component={Palautukset} />
        </Switch>
      </div>

    <Footer />
</div>
  );
}

export default App;
