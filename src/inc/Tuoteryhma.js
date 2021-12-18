import './Tuoteryhma.css'
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


//Näyttää tuotteet tuoteryhmittäin
export default function Tuoteryhma({url, category, addToCart}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category !== null) {
            axios.get(url + 'tuote/getproducts.php/' + category?.id)
            .then((response) => {
                const json = response.data;
                setProducts(json);
            }).catch(error => {
                if (error.response === undefined) {
                    alert(error);
                } else {
                    alert(error.response.data.error);
                }
            })
        }
    }, [category])
    
    return (
        <div id="tuoteryhma" className="container">
            <div className="row">
                    <h3>{category?.name}</h3>
                    {products.map(product => (
                        <div key={product.id} className="col-12 col-lg-4 col-xl-3 col">
                                <Link
                                to={{
                                pathname: '/Tuote',
                                state: {
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    image: product.image,
                                    description: product.description
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
    )
}
