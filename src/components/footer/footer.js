import React, { useCallback } from 'react';
import './footer.sass';
import { Link } from 'gatsby';
import { Button, Image } from 'react-bootstrap';
import vk from './../../images/footer/social/vk.png';
import fb from './../../images/footer/social/FB.png';
import instagram from './../../images/footer/social/instagram.png';
import upMobile from './../../images/footer/up-mobile.png';

const Footer = () => {

  const scrollToTop = useCallback(() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}));

  return (
    <footer>
      <div class="align-items-center align-items-md-start footer-container flex-fill" id="footer-links">
        <div className="footer-column align-items-center align-items-md-start mb-5 mb-md-0 mr-0 ml-md-5 ml-xl-6 mr-xl-auto">
          <h3 className="phone-number" id="footer-phone-number">+7901 703-01-04</h3>
          <a href="http://info@canada-maple.com">info@canada-maple.com</a>
        </div>
        <div className="mt-5 mt-md-0 d-flex d-md-inline-flex ml-md-0">
          <div className="d-inline d-sm-inline-flex mr-3 mr-sm-5 ">
            <div className="footer-column mr-sm-5 ml-sm-5 mr-xl-0">
              <Link to="#">Образование</Link>
              <Link to="#">Работа</Link>
              <Link to="#">Иммиграция</Link>
              <Link to="#">Визы</Link>
              <Link to="#">Гуманитарная <br /> Программа</Link>
            </div>
            <div className="footer-column ml-sm-5 mr-sm-5 mr-xl-auto">
              <Link to="#">Семейное Спонсорство</Link>
              <Link to="#">Гражданство</Link>
              <Link to="#">Изменение Статуса</Link>
              <Link to="#">Консультация</Link>
              <Link to="#">Политика <br /> конфиденциальности</Link>
            </div>
          </div>
          <div className="d-flex d-md-inline-flex ml-3  ml-sm-0 mr-sm-auto" id="footer-meta-links">
            <div className="footer-column ml-xl-0 mr-0 mr-md-5">
              <Link to="#">О нас</Link>
              <Link to="#">Отзывы</Link>
              <Link to="#">Новости</Link>
            </div>
            <div className="footer-column mx-sm-0 mx-md-auto">
              <Link to="#">вопросы</Link>
              <Link to="#">Контакты</Link>
            </div>
          </div>
        </div>
        <div className="footer-column d-none d-md-flex ml-md-auto mr-md-5 ml-xl-auto mr-xl-6 justify-content-center pt-5">
          <button onClick={scrollToTop} id="up-button" />
        </div>
      </div>
      <div className="footer-container align-items-md-center mb-5" id="footer-copy-social">
        <div className="copyright footer-column mx-auto">© 2019 Maple. Country immigration</div>
        <div className="social footer-column mr-xl-6 align-items-center">
          <a className="mr-4 mr-sm-0" href="#"><Image src={fb} /></a>
          <a className="mx-4" href="#"><Image src={instagram} /></a>
          <a className="ml-4 ml-sm-0" href="#"><Image src={vk} /></a>
        </div>
      </div>
      <button onClick={scrollToTop} className="up-button-mobile d-sm-flex d-md-none">
        <Image src={upMobile} />
      </button>
    </footer>
  );
};

export default Footer;
{/*<Row>*/}
{/*  <Link to="#">Образование</Link>*/}
{/*</Row>*/}
{/*<Row>*/}
{/*<Link to="#">Работа</Link>*/}
{/*</Row>*/}
{/*<Row>*/}
{/*<Link to="#">Иммиграция</Link>*/}
{/*</Row>*/}
{/*<Row>*/}
{/*<Link to="#">Визы</Link>*/}
{/*</Row>*/}
{/*<Row>*/}
{/*<Link to="#">Гуманитарная Программа</Link>*/}
{/*</Row>*/}
