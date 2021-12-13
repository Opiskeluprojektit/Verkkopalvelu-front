import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './inc/Navbar';
import Kotisivu from './inc/Kotisivu';
import Tuoteryhma from './inc/Tuoteryhma';
import Tilaus from './inc/Tilaus';
import Footer from './inc/Footer';
import Yhteystiedot from './inc/Yhteystiedot';
import Admin from './inc/Admin';
import TietoaMeista from './inc/TietoaMeista';
import UKK from './inc/UKK';
import Palautukset from './inc/Palautukset';
import Tuote from './inc/Tuote';  //Yksittäisen tuotteen näyttäminen / AK
import Popular from './inc/Popular'
import Maisema from './inc/Maisema'
import Asiakas from './inc/Asiakas'
import React, {useState,useEffect} from 'react';

const URL = 'http://localhost/verkkopalveluback/';

// Sivun osat, tehty reitityksellä
function App() {

  //kategorian tilamuutuja
  const [category, setCategory] = useState(null);

  //Tuotteen tilamuuttuja  / yksittäisen tuotteen näyttö /AK
  const [product,setProduct] = useState(null);

  //Asiakkaan tilamuuttuja / asiakkaan tilaamien tuotteiden näyttäminen
  const [asiakas, setAsiakas] = useState(null);

  //ostoskorin tilamuuttuja taulukkomuodossa-AK
  const [cart, setCart] = useState([]);
  
  let location = useLocation();

// Yksittäisen tuotteen näyttäminen /AK / Alla vielä toimiva location-state
  useEffect(() => {
    if (location.state !==undefined) {
      if (location.pathname ==="/Tuotteet") {  //tuoteryhmän tuotteen näyttäminen
        setCategory({id: location.state.id,name:location.state.name});
      } else if(location.pathname==="/Tuote") {  //klikataan yksittäistä tuotetta
        setProduct({id: location.state.id,name:location.state.name, price:location.state.price, image:location.state.image});
      }
    }
  }, [location.state])

  // Asiakkaan tilausten näyttäminen
  useEffect(() => {
    if (location.state !==undefined) {
      if (location.pathname ==="/Asiakas") {  //asiakkaan tilausten näyttäminen
        setAsiakas({id: location.state.id,name:location.state.name,firstname:location.state.firstname,lastname:location.state.lastname});
      } 
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
    if (cart.some(item => item.id === product.id))  {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1,product);
    } else {
      product["amount"] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  // Ostoskorin tuotteen määrän päivittäminen
  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id))
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  // Ostoskorin tyhjentäminen
  function emptyCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }
   
  /* Ostokorista poistaminen */
    function removeFromCart(product) {
      const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
      setCart(itemsWithoutRemoved);
      localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
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
                addToCart={addToCart}
              />
            }
          />
          <Route 
            path = "/Tuote"
            render={() =>
              <Tuote
              url={URL}
              product={product}
              addToCart={addToCart}
              />
            }
          />        
          <Route path="/" component={Kotisivu} exact/>

          <Route path="/Tilaus" render={() =>
            <Tilaus 
              cart={cart}
              updateAmount={updateAmount}
              empty={emptyCart}
              removeFromCart={removeFromCart}
              url={URL}
              />
          } />
          
          <Route path="/Yllapito" render={() =>
          <Admin
            url={URL}
            setAsiakas={setAsiakas}
            />
          }
          />

          <Route path="/Asiakas" render={() =>
          <Asiakas
            url={URL}
            asiakas={asiakas}
            />
          }
          />

          <Route path="/Suositut" render={() =>
          <Popular
            url={URL}
            addToCart={addToCart}
            />
          }
          />

          <Route path="/Maisemajulisteet" render={() =>
          <Maisema
            url={URL}
            addToCart={addToCart}
            />
          }
          />

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
