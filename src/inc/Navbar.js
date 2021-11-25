import './Navbar.css';
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Ostoskori from './Ostoskori';


//Navi
export default function Navbar({cart, setCategory, url}) {
  const [categories, setCategories] = useState([]);

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

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href=" ">Visual</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="inc/Kotisivu">Kotisivu</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
                  <ul className="dropdown-menu">
                    {categories.map(category =>(
                      <li key={category.id}>
                        <Link className="dropdown-item"
                        to={{
                          pathname: '/',
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
                  </ul>
                </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Haku" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Haku</button>
            </form>
            {/* Ostoskori */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"></li>
              <Ostoskori cart={cart}/>
            </ul>
            {/* vanha ostoskori-ikoni <i className="bi bi-cart-fill mx-2"></i> */}
          </div>
        </div>
      </nav>   
    
    )
}
