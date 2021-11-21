import React from 'react';
import './Kotisivu.css';

//Kotisivu
export default function Kotisivu(addToCart) {
    return (
        <div>
        <div className="container">
        <div className="row">
        <div className="card col m-5">
        <div className="card">
            <div className="card-body top-card">
            <h5>Suositut</h5>
            <a>Tutustu</a>
            </div>
        </div>
        <img src="http://localhost/verkkopalveluback/img/Piirustus/Kissa.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Kissa</h5>
            <p className="card-text">Esimerkkitekstiä kissapiirrustuksesta.</p>
            <a href="#" className="tuotesivulle">Tuotesivulle</a><br></br>

            {/* <button class="btn-primary" type="button" onClick={e => addToCart(tuote)}>Lisää</button> */}
            <button class="btn-secondary" type="button">Lisää</button>
            <i className="bi bi-cart-fill mx-2"></i>
        </div>
        </div>
        <div className="card col m-5">
        <div className="card">
            <div class="card-body top-card">
            <h5>Maalaukset</h5>
            <a>Tutustu</a>
            </div>
        </div>
        <img src="http://localhost/verkkopalveluback/img/Illustrointi/Puut.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Puut</h5>
            <p className="card-text">Maalauksesta esimerkkiasiaa.</p>
            <a href="#" className="tuotesivulle">Tuotesivulle</a><br></br>
            {/* <button class="btn-primary" type="button" onClick={e => addToCart(tuote)}>Lisää</button> */}
            <button class="btn-secondary" type="button">Lisää</button>
            <i className="bi bi-cart-fill mx-2"></i>
        </div>
        </div>
        <div className="card col m-5">
        <div className="card">
            <div className="card-body top-card">
            <h5>Valokuvat</h5>
            <a>Tutustu</a>
            </div>
        </div>
        <img src="http://localhost/verkkopalveluback/img/Valokuva/Elefantti2.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Elefantti</h5>
            <p className="card-text">Norsu-valokuvasta esimerkiksi asiaa.</p>
            <a href="#" className="tuotesivulle">Tuotesivulle</a><br></br>
            {/* <button class="btn-primary" type="button" onClick={e => addToCart(tuote)}>Lisää</button> */}
            <button class="btn-secondary" type="button">Lisää</button>
            <i className="bi bi-cart-fill mx-2"></i>
        </div>
        </div>
        </div>

        <div className="row maisemajulisteet">
            <div className="card">
                <div className="card-body top-card-maisemajulisteet">
                <h5>Maisemajulisteet</h5>
                <a>Tutustu</a>
                </div>
            </div>
            <img src="http://localhost/verkkopalveluback/img/Valokuva/Valokuva13.jpg" className="card-img-top" alt="..."/>
        </div>

        <div className="row inspiroidu">
            <h5>INSPIROIDU</h5>
            <p>Visual tuo sinulle modernin taiteen monissa eri muodoissa. Kauneus on katsojan silmissä, ja Visualin 
                eri tyyleistä löydät varmasti omasi. Tauluilla voit luoda oman tyylisesi ilmapiirin, jossa silmä ja
                sielu lepäävät. Korista ympäristösi piirustuksin, illustroinnein, valokuvin tai maalauksin. Löydät 
                teoksista eri kategorioida, kuten abstraktia taikka luontoon tai eläimiin liittyviä teoksia. Olet 
                värien tai mustavalkoisten teosten ystävä, Visualilta löydät molempia. Inspiroidu Visualin monista 
                eri tyyleistä. 
            </p>
        </div>

        <div className="row tarvikkeet">
            <div className="card">
                <div className="card-body top-card-tarvikkeet">
                <h5>Tarvikkeet</h5>
                <a>Tutustu</a>
                </div>
            </div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src="http://localhost/verkkopalveluback/img/Tarvikkeet/Kynät/Kynä2.png" class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="http://localhost/verkkopalveluback/img/Tarvikkeet/Pensselit/Pensseli3.png" class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src="http://localhost/verkkopalveluback/img/Tarvikkeet/Maalit/Maali1.png" class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="http://localhost/verkkopalveluback/img/Tarvikkeet/Tarvikkeet3.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
        </div>
        </div>        
        </div>
    )
}