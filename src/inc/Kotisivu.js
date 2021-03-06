import React from 'react';
import './Kotisivu.css';
import { Link } from 'react-router-dom';


//Kotisivu
export default function Kotisivu(addToCart) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {/* Linkit Suositut-, Illustrointi- ja Valokuvat-tuotteisiin */}
                    <div className="d-flex justify-content-center col-lg-3 col-m-7">
                        <Link to="/Suositut">
                        <div className="card card2 mobiili">
                            <div className="card-body top-card">
                            <h5>Suositut</h5>
                            </div>
                        </div>
                        <div>
                            <img src="http://localhost/verkkopalveluback/img/Piirustus16.png" className="card-img-top" alt="..."/>
                        </div> 
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center col-lg-4 col-m-7">
                        <Link to={{
                            pathname: "/Tuotteet",
                            state: {
                                id: "4",
                                name: "Illustrointi"
                            }}}>
                        <div className="card card2">
                            <div className="card-body top-card">
                            <h5>Illustrointi</h5>
                            </div>
                        </div>
                        <div>
                            <img src="http://localhost/verkkopalveluback/img/Illustrointi24.png" className="card-img-top" alt="..."/>
                        </div> 
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center col-lg-4 col-m-7">
                        <Link to={{
                            pathname: "/Tuotteet",
                            state: {
                                id: "3",
                                name: "Valokuvat"
                            }}}>
                        <div className="card card2">
                            <div className="card-body top-card">
                            <h5>Valokuvat</h5>
                            </div>
                        </div>
                        <div>
                            <img src="http://localhost/verkkopalveluback/img/Valokuva29.png" className="card-img-top" alt="..."/>
                        </div> 
                        </Link>
                        </div>
                    </div>

                    {/* Maisemajulisteet-suodattimeen linkki */}
                    <div className="row maisemajulisteet d-flex justify-content-center">
                        <Link to="/Maisemajulisteet">
                        <div className="card card2">
                            <div className="card-body top-card-maisemajulisteet">
                            <h5>Maisemajulisteet</h5>
                            <a className="mobiiliversio">Tutustu</a>
                            </div>
                        </div>
                        <div>
                            <img src="http://localhost/verkkopalveluback/img/Valokuva13.jpg" className="card-img-top" alt="..."/>
                        </div>
                        </Link>
                    </div>
                    <div className="row inspiroidu">
                        <h5>INSPIROIDU</h5>
                        <p>Visual tuo sinulle modernin taiteen monissa eri muodoissa. Kauneus on katsojan silmiss??, ja Visualin 
                            eri tyyleist?? l??yd??t varmasti omasi. Tauluilla voit luoda oman tyylisesi ilmapiirin, jossa silm?? ja
                            sielu lep????v??t. Korista ymp??rist??si piirustuksin, illustroinnein, valokuvin tai maalauksin. L??yd??t 
                            teoksista eri kategorioida, kuten abstraktia taikka luontoon tai el??imiin liittyvi?? teoksia. Olet 
                            v??rien tai mustavalkoisten teosten yst??v??, Visualilta l??yd??t molempia. Inspiroidu Visualin monista 
                            eri tyyleist??. 
                        </p>
                    </div>

                    {/* Tarvikkeet-karuselli */}
                    <div className="row tarvikkeet">
                        <h5>TARVIKKEET</h5>
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        <Link to={{
                            pathname: "/Tuotteet",
                            state: {
                                id: "5",
                                name: "Tarvikkeet"
                            }}}>
                            <div className="carousel-item active" data-bs-interval="4000">
                            <img src="http://localhost/verkkopalveluback/img/Tarvikkeet_Kyna2.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="4000">
                            <img src="http://localhost/verkkopalveluback/img/Tarvikkeet_Pensseli3.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="4000">
                            <img src="http://localhost/verkkopalveluback/img/Tarvikkeet_Maali1.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="4000">
                            <img src="http://localhost/verkkopalveluback/img/Tarvikkeet3.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div> 
        </div>
    )
}