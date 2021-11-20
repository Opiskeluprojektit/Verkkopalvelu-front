import React from 'react';

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
        <img src="img/Kissa.png" className="card-img-top" alt="..."/>
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
        <img src="img/Puut.png" className="card-img-top" alt="..."/>
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
        <img src="img/Elefantti2.png" className="card-img-top" alt="..."/>
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
        </div> 
        </div>
    )
}