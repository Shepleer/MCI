import React, { useCallback, useState } from 'react';
import { Container, Form, FormControl, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'gatsby';
import './headerMobile.sass';
import menu from '../../images/header/menu.png';
import closeMenu from '../../images/header/menu-back.png';
import logo from '../../images/header/logo.png'
import phone from '../../images/header/phone.png'
import collapseArrow from './../../images/collapse-arrow.png';
import burger from './../../images/menu.svg';

const HeaderMobile = () => {
  // const [toggled, toggle] = useState(true);
  //
  // const toggleMenu = useCallback(() => toggle(!toggled),
  //   [toggle, toggled]
  // );

  const [visibleItems, setVisible] = useState({});

  const toggleVisible = useCallback((e) => {
    const name = e.target.getAttribute('name');
    setVisible(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  }, [setVisible, visibleItems]);

  return (
    <header>
      <div className="header-mobile on-content-layout">
        <button name="mobileMenu" onClick={toggleVisible} className="menu-button">
          <div name="mobileMenu" id="menu-toggle" className={`${visibleItems.mobileMenu ? 'open' : ''}`}>
            <span name="mobileMenu"></span>
            <span name="mobileMenu"></span>
            <span name="mobileMenu"></span>
            <span name="mobileMenu"></span>
          </div>
        </button>
        <Link to="/"><img src={logo} /></Link>
        <a href="tel:+79017030104"><img src={phone} /></a>
      </div>
      <nav className={`${visibleItems.mobileMenu ? null : 'hidden'} header-mobile-menu`}>
        <div className="dropdown-link">
          <div className="menu-item collapse-item">
            <Link name="immigration" to="/immigration">Иммиграция</Link>
            <button name="immigration" onClick={toggleVisible} className="menu-button"><img name="immigration" className={`collapse-arrow ${visibleItems.immigration ? 'active' : null}`} src={collapseArrow} /></button>
          </div>
          <div className={`${visibleItems.immigration ? null : 'hidden'} detail-links`}>
            <Link className="mobile-link" to="/immigration/expressEntry">Express Entry</Link>
            <Link className="mobile-link" to="/immigration/provincialPrograms">Провинциальные Программы</Link>
            <Link className="mobile-link" to="/immigration/businessImmigration">Бизнес Иммиграция</Link>
            <Link className="mobile-link" to="/immigration/familySponsorship">Семейное спонсорство</Link>
          </div>
        </div>
        <div className="dropdown-link">
          <div className="menu-item collapse-item">
            <Link to="/visa">Визы</Link>
            <button name="visa" onClick={toggleVisible} className="menu-button"><img name="visa" className={`collapse-arrow ${visibleItems.visa ? 'active' : null}`} src={collapseArrow} /></button>
          </div>
          <div className={`${visibleItems.visa ? null : 'hidden'} detail-links`}>
            <Link className="menu-item" to="/visa/guestVisa">Гостевые Визы</Link>
            <Link className="menu-item" to="/visa/studentVisa">Студенческие Визы</Link>
            <Link className="menu-item" to="/visa/workVisa">Рабочие Визы</Link>
            <Link className="menu-item" to="/visa/superVisa">Супер Визы</Link>
            <Link className="menu-item" to="/visa/restorationStatus">Продление и Восстановление Статуса</Link>
          </div>
        </div>
        <Link className="menu-item" to="/lmia">Оценка Рынка Труда (LMIA)</Link>
        <Link className="menu-item" to="/humanities">Гуманитарная Программа</Link>
        <Link className="menu-item" to="/citizenship">Гражданство</Link>
        <Link className="menu-item" to="/">Получить консультацию</Link>
        <Link className="menu-item" to="/about">О нас</Link>
        <Link className="menu-item" to="#">Отзывы</Link>
        <Link className="menu-item" to="/news">Новости</Link>
        <Link className="menu-item" to="/questions">Вопросы</Link>
        <Link className="menu-item" to="/contact">Контакты</Link>
      </nav>
    </header>
  );
};

export default HeaderMobile;
