import './App.css';

function App() {
  return (
<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href=" ">Visual</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href=" ">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tuotteet
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href=" ">Eka tuote</a></li>
            <li><a className="dropdown-item" href=" ">Toka tuote</a></li>
            <li><a className="dropdown-item" href=" ">Kolmas tuote</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <i className="bi bi-cart-fill mx-2"></i>
    </div>
  </div>
</nav>
<div className="container">
  <div className="row">
    <div className="col">
      <h3>Suositut</h3>
    </div>
    <div className="col">
      <h3>Tarjoukset</h3>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
<div className="card col m-5">
<div class="card">
    <div class="card-body top-card">
      <h5>Suositut</h5>
      <a>Tutustu</a>
    </div>
  </div>
  <img src="img/cat.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Kissa</h5>
    <p class="card-text">Esimerkkitekstiä kissapiirrustuksesta.</p>
    <a href=" " className="tuotesivulle">Tuotesivulle</a><br></br>
    <i class="bi bi-cart-fill mx-2"></i>
  </div>
</div>
<div className="card col m-5">
<div class="card">
    <div class="card-body top-card">
      <h5>Maalaukset</h5>
      <a>Tutustu</a>
    </div>
  </div>
  <img src="img/trees.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Puut</h5>
    <p class="card-text">Maalauksesta esimerkkiasiaa.</p>
    <a href=" " className="tuotesivulle">Tuotesivulle</a><br></br>
    <i class="bi bi-cart-fill mx-2"></i>
  </div>
</div>
<div className="card col m-5">
<div class="card">
    <div class="card-body top-card">
      <h5>Valokuvat</h5>
      <a>Tutustu</a>
    </div>
  </div>
  <img src="img/elephant-dark.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Elefantti</h5>
    <p class="card-text">Norsu-valokuvasta esimerkiksi asiaa.</p>
    <a href=" " className="tuotesivulle">Tuotesivulle</a><br></br>
    <i class="bi bi-cart-fill mx-2"></i>
  </div>
  </div>
</div>
</div>
</div>
  );
}

export default App;
