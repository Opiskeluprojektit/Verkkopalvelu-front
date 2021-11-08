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
<div className="card col m-5">
<div className="card">
    <div className="card-body top-card">
      <h5>Suositut</h5>
      <a>Tutustu</a>
    </div>
  </div>
  <img src="img/cat.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Kissa</h5>
    <p className="card-text">Esimerkkitekstiä kissapiirrustuksesta.</p>
    <a href=" " className="tuotesivulle">Tuotesivulle</a><br></br>
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
  <img src="img/trees.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Puut</h5>
    <p className="card-text">Maalauksesta esimerkkiasiaa.</p>
    <a href=" " className="tuotesivulle">Tuotesivulle</a><br></br>
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
  <img src="img/elephant-dark.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Elefantti</h5>
    <p className="card-text">Norsu-valokuvasta esimerkiksi asiaa.</p>
    <a href=" " className="tuotesivulle">Tuotesivulle</a><br></br>
    <i className="bi bi-cart-fill mx-2"></i>
  </div>
  </div>
</div>
</div>
{/*className=" bg-light" footeriin->sama väri kuin navissa? 
https://www.bootdey.com/snippets/view/white-footer#html footerin koodit löytyy täältä*/}
<footer className="footer_area section_padding_130_0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              <div className="footer-logo mb-3"></div>
              <p>Visual is a .....
                Tähän lisätietoa kaupasta( Yhteystiedot jne?)
              </p>
              <div className="copywrite-text mb-5">
                <p className="mb-0">This footer is made with <i class="lni-heart mr-1"></i> by<a class="ml-1" href="https://wrapbootstrap.com/user/DesigningWorld"> Designing World</a></p>
              </div>
              <div className="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i class="fa fa-pinterest"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i class="fa fa-skype"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">About</h5>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Corporate Sale</a></li>
                  <li><a href="#">Terms &amp; Policy</a></li>
                  <li><a href="#">Community</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Support</h5>
              <div className="footer_menu">
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
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Contact</h5>
              <div className="footer_menu">
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
