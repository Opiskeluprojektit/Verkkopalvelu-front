import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Etusivu({url, setCategory}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      axios.get(url + 'tuote/getcategories.php')
        .then((response) => {
          const json = response.data;
          setCategories(json);
          setCategory(json[0]);
        }).catch (error => {
          if (error.response === undefined) {
          } else {
          }
        })
    },[])

    return (
      <div className="container">
        <div className="row m-5">
            <div className="d-flex justify-content-center col-4">
          {categories.map((category) => (
            <div className="card col-4 m-5" key={category.id}>
              <Link
                className="card-body top-card"
                to={{
                  pathname: "/Tuotteet",
                  state: {
                    id: category.id,
                    name: category.name,
                  },
                }}
              >
                <h5>{category.name}</h5>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
}