import React from 'react';
import './Kotisivu.css';
import { Link } from 'react-router-dom'

//Kotisivu
export default function Kotisivu(addToCart) {
    return (
        <div>
        <div className="container">
        <div className="row">
        <div className="d-flex justify-content-center col-lg-3 col-m-7">
            <Link to="#">
            <div className="card card2">
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
            <Link to="/Tuotteet">
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
            <Link to="/Tuotteet">
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
        
        


        {/* <div className="card col m-5">
        <div className="card">
            <div className="card-body top-card">
            <h5>Suositut</h5>
            <a>Tutustu</a>
            </div>
        </div>
        <img src="http://localhost/verkkopalveluback/img/Piirustus16.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Kissa</h5>
            <p className="card-text">Esimerkkitekstiä kissapiirrustuksesta.</p>
            <a href="#" className="tuotesivulle">Tuotesivulle</a><br></br>
        </div>
        </div>
        <div className="card col m-5">
        <div className="card">
            <div class="card-body top-card">
            <h5>Maalaukset</h5>
            <a>Tutustu</a>
            </div>
        </div>
        <img src="http://localhost/verkkopalveluback/img/Illustrointi24.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Puut</h5>
            <p className="card-text">Maalauksesta esimerkkiasiaa.</p>
            <a href="#" className="tuotesivulle">Tuotesivulle</a><br></br>
        </div>
        </div>
        <div className="card col m-5">
        <div className="card">
            <div className="card-body top-card">
            <h5>Valokuvat</h5>
            <a>Tutustu</a>
            </div>
        </div>
        <img src="http://localhost/verkkopalveluback/img/Valokuva29.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Elefantti</h5>
            <p className="card-text">Norsu-valokuvasta esimerkiksi asiaa.</p>
            <a href="#" className="tuotesivulle">Tuotesivulle</a><br></br>
        </div>
        </div>*/}
        </div>
        <div className="row maisemajulisteet d-flex justify-content-center">
            <div className="card card2">
                <div className="card-body top-card-maisemajulisteet">
                <h5>Maisemajulisteet</h5>
                <a>Tutustu</a>
                </div>
            </div>
            <div>
                <img src="http://localhost/verkkopalveluback/img/Valokuva13.jpg" className="card-img-top" alt="..."/>
            </div> 
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
            <h5>TARVIKKEET</h5>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
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
            </div> 
        </div>
        </div>
        </div>        
        </div>
    )
}