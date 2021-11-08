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
{/*className=" bg-light" footeriin->sama väri kuin navissa? 
https://www.bootdey.com/snippets/view/white-footer#html footerin koodit löytyy täältä*/}
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
<footer class="footer_area section_padding_130_0">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-footer-widget section_padding_0_130">
              <div class="footer-logo mb-3"></div>
              <p>Visual is a .....
                Tähän lisätietoa kaupasta( Yhteystiedot jne?)
              </p>
              <div class="copywrite-text mb-5">
                <p class="mb-0">This footer is made with <i class="lni-heart mr-1"></i> by<a class="ml-1" href="https://wrapbootstrap.com/user/DesigningWorld"> Designing World</a></p>
              </div>
              <div class="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i class="fa fa-pinterest"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i class="fa fa-skype"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <h5 class="widget-title">About</h5>
              <div class="footer_menu">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Corporate Sale</a></li>
                  <li><a href="#">Terms &amp; Policy</a></li>
                  <li><a href="#">Community</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <h5 class="widget-title">Support</h5>
              <div class="footer_menu">
                <ul>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Term &amp; Conditions</a></li>
                  <li><a href="#">Help &amp; Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <h5 class="widget-title">Contact</h5>
              <div class="footer_menu">
                <ul>
                  <li><a href="#">Call Centre</a></li>
                  <li><a href="#">Email Us</a></li>
                  <li><a href="#">Term &amp; Conditions</a></li>
                  <li><a href="#">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</div>
  );
}

export default App;
