import './Navbar.css';
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Ostoskori from './Ostoskori';


//Navi
export default function Navbar({cart, setCategory, url}) {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [haut, setHaut] = useState([]);

  {/* Tuoteryhmien haku tietokannasta */}
  useEffect(() => {
    axios.get(url + 'tuote/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
        setCategory(json[0]);
      }).catch (error => {
        if (error.response === undefined) {
          alert(error);
        } else {
          alert(error.response.data.error);
        }
      })
  },[])

  {/* Tuotteiden haku Haku-toiminnolla tietokannasta */}
  function search(e) {
    e.preventDefault();
    console.log("search");
    fetch(url + 'tuote/search.php',{
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
        })
    })
    .then ((response) => {
        const json = response.data;
        setHaut(json);
        console.log(json);
    }).catch (error =>{
      if (error.response === undefined) {
        alert(error);
      } else {
        alert(error.response.data.error);
      }
    })
}

    {/* Navigointinapit etusivulle ja tuoteryhmiin */}
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Visual</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Etusivu</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
                  <ul className="dropdown-menu">
                    {categories.map(category =>(
                      <li key={category.id}>
                        <Link className="dropdown-item"
                        to={{
                          pathname: '/Tuotteet',
                          state: {
                            id: category.id,
                            name: category.name,
                          }
                        }}
                        >
                        {category.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                    <Link className="dropdown-item" to="/Suositut">Suositut</Link>
                    </li>
                  </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Yllapito">Ylläpito</Link>
              </li>
            </ul>
            {/* Haku-kenttä */}
            <div>
            <form onSubmit={search} className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Haku" aria-label="Search" 
              onChange={e => setName(e.target.value)}/>
                              <button className="btn btn-outline-success" type="submit">Haku</button>
            <div>
                   {haut?.map(haku => (
                        <div key={haku.id}>
                                <Link className="btn btn-outline-success" type="submit"
                                to={{
                                pathname: '/Tuote',
                                state: {
                                    id: haku.id,
                                    name: haku.name,
                                    price: haku.price,
                                    image: haku.image
                                }
                                }}> 
                            </Link>
                        </div>
                    ))} 
            </div>
            </form>
            </div>

            {/* Ostoskori */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"></li>
              <Ostoskori cart={cart}/>
            </ul>
          </div>
        </div>
      </nav>   
    
    )
}
