import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './inc/Navbar';
import Kotisivu from './inc/Kotisivu';
import Footer from './inc/Footer';
import Yhteystiedot from './inc/Yhteystiedot';
import TietoaMeista from './inc/TietoaMeista';
import UKK from './inc/UKK';
import Palautukset from './inc/Palautukset';
import React, {useState,useEffect} from 'react';

// Sivun osat, tehty reitityksellä
function App() {

  //ostoskorin tilamuuttuja taulukkomuodossa-AK
  const [cart, setCart] = useState([]);
  
  // Localsotragen ostoskorin tilamäärän nollaantumisen esto sivua päivitettäessä -AK
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
  <Navbar cart={cart}/>
    

  <div className="container">
        <Switch>
          <Route path="/" component={Kotisivu} exact        cart={cart} addToCart={addToCart}/>
          <Route path="/inc/Yhteystiedot" component={Yhteystiedot} />
          <Route path="/inc/TietoaMeista" component={TietoaMeista} />
          <Route path="/inc/UKK" component={UKK} />
          <Route path="/inc/Palautukset" component={Palautukset} />
        </Switch>
      </div>

    <Footer />
</div>
  );
}

export default App;
