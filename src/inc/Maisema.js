import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Popular({url, addToCart}) {
  const [products, setProducts] = useState([]);

  {/* Maisema-tuotteiden haku tietokannasta */}
  useEffect(() => {
      axios.get(url + 'tuote/getmaisema.php')
        .then((response) => {
          const json = response.data;
          setProducts(json);
        }).catch (error => {
          if (error.response === undefined) {
            alert(error);
          } else {
            alert(error.response.data.error);
          }
        })
  },[])

  {/* Maisema-tuotteiden näyttäminen */}
  return (
    <div>
      <div id="tuoteryhma" className="container">
        <div className="row">
          <h3>Maisemajulisteet</h3>
          {products.map(product => (
            <div key={product.id} className="col-12 col-lg-4 col-xl-3 col">
                <Link
                  to={{
                  pathname: '/Tuote',
                  state: {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  }
                  }}>
                  <p>{product.name}</p>
                <div>
                    <img src={url + 'IMG/' + product.image} alt="" />
                </div>
                </Link>
                <p>{product?.price} €</p>
                <button class="btn-light" type="button" onClick={e => addToCart(product)}>Lisää <i className="bi bi-cart-fill mx-2"></i></button>  
            </div>
          ))}
        </div>    
      </div>
    </div>
  )
}
