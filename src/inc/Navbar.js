import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/verkkopalveluback/tuote/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
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
                <a className="nav-link active" aria-current="page" href="/inc/Kotisivu">Kotisivu</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
                  <ul className="dropdown-menu">
                    {categories.map(category =>(
                      <li>
                        <Link>
                        {category.trnimi}
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
            <i className="bi bi-cart-fill mx-2"></i>
          </div>
        </div>
      </nav>   
    
    )
}
