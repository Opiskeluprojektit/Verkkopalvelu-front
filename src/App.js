import './App.css';
import Navbar from './inc/Navbar';

function App() {
  return (
<div>
  <Navbar/>
    
<div className="container">
  <div className="row">
<div className="card col m-5">
<div className="card">
    <div className="card-body top-card">
      <h5>Suositut</h5>
      <a>Tutustu</a>
    </div>
  </div>
  <img src="img/Kissa.png" class="card-img-top" alt="..."/>
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
  <img src="img/Puut.png" class="card-img-top" alt="..."/>
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
  <img src="img/Elefantti2.png" class="card-img-top" alt="..."/>
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
              <p>Visual on vuonna 2021 perustettu moderni taidekauppa. 
                Idean takana on viisi innokasta opiskelijaa, jotka halusivat perustaa oman yrityksen.
                Visual on suunnattu ihmisille, jotka haluavat luoda sekä
                hankkia itselleen uniikkia taidetta ja samalla tukea suomalaisia taiteentekijöitä.
                </p>
                <p>
                Kivijalkamyymälä: Taidetie 2, 34567 Oulu.
                </p>
                <p>
                Puh: 012-3456789
                </p>
              <div className="copywrite-text mb-5">
                <p className="mb-0">This footer is made with <i class="lni-heart mr-1"></i> by<a class="ml-1" href="https://wrapbootstrap.com/user/DesigningWorld"> Designing World</a></p>
              </div>
              <div className="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i class="fa fa-pinterest"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i class="fa fa-skype"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Visual</h5>
              <div className="footer_menu">
              <ul>
                  <li><a href="#">Tietoa meistä</a></li>
                  <li><a href="#">Yhteystiedot</a></li>
                  <li><a href="#">Työpaikat</a></li>
                  <li><a href="#">Taiteilijat</a></li>
                  <li><a href="#">Visual Yhteisö</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Asiakaspalvelu</h5>
              <div className="footer_menu">
              <ul>
                  <li><a href="#">Usein kysytyt kysymykset</a></li>
                  <li><a href="#">Palautukset</a></li>
                  <li><a href="#">Tilaus- ja toimitusehdot</a></li>
                  <li><a href="#">Reklamaatio</a></li>
                  <li><a href="#">Evästeet</a></li>
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
