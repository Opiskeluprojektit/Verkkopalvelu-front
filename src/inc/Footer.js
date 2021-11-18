import React from 'react';

export default function Footer() {
    return (
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
    )
}