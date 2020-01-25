import React, { useCallback, useState } from "react"
import {
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap"
import { Link } from "gatsby"
import "./headerMobile.sass"
import menu from "../../images/header/menu.png"
import closeMenu from "../../images/header/menu-back.png"
import logo from "../../images/header/logo.png"
import phone from "../../images/header/phone.png"
import collapseArrow from "./../../images/collapse-arrow.png"
import burger from "./../../images/menu.svg"

const HeaderMobile = () => {
  // const [toggled, toggle] = useState(true);
  //
  // const toggleMenu = useCallback(() => toggle(!toggled),
  //   [toggle, toggled]
  // );

  const [visibleItems, setVisible] = useState({})

  const toggleVisible = useCallback(
    e => {
      const name = e.target.getAttribute("name")
      setVisible(prev => ({
        ...prev,
        [name]: !prev[name],
      }))
    },
    [setVisible, visibleItems]
  )

  const openLevel = useCallback(
    e => {
      const name = e.target.getAttribute("name")
      setVisible(prev => ({
        ...prev,
        [name]: true,
      }));
      debugger
    },
    [setVisible]
  )

  const closeLevel = useCallback(
    e => {
      const name = e.target.getAttribute("name")
      setVisible(prev => ({
        ...prev,
        [name]: false,
      }));
    },
    [setVisible]
  )

  return (
    <header>
      <div className="header-mobile on-content-layout">
        <button
          name="mobileMenu"
          onClick={toggleVisible}
          className="menu-button"
        >
          <div
            name="mobileMenu"
            id="menu-toggle"
            className={`${visibleItems.mobileMenu ? "open" : ""}`}
          >
            <span name="mobileMenu" />
            <span name="mobileMenu" />
            <span name="mobileMenu" />
            <span name="mobileMenu" />
          </div>
        </button>
        <Link to="/">
          <img src={logo} />
        </Link>
        <a href="tel:+79017030104">
          <img src={phone} />
        </a>
      </div>
      {/*<nav className={`${visibleItems.mobileMenu ? null : 'hidden'} header-mobile-menu`}>*/}
      {/*<div className="dropdown-link">*/}
      {/*  <div className="menu-item collapse-item">*/}
      {/*    <Link name="immigration" to="/immigration">Иммиграция</Link>*/}
      {/*    <button name="immigration" onClick={toggleVisible} className="menu-button"><img name="immigration" className={`collapse-arrow ${visibleItems.immigration ? 'active' : null}`} src={collapseArrow} /></button>*/}
      {/*  </div>*/}
      {/*  <div className={`${visibleItems.immigration ? null : 'hidden'} detail-links`}>*/}
      {/*    <Link className="mobile-link" to="/immigration/expressEntry">Express Entry</Link>*/}
      {/*    <Link className="mobile-link" to="/immigration/provincialPrograms">Провинциальные Программы</Link>*/}
      {/*    <Link className="mobile-link" to="/immigration/businessImmigration">Бизнес Иммиграция</Link>*/}
      {/*    <Link className="mobile-link" to="/immigration/familySponsorship">Семейное спонсорство</Link>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dropdown-link">*/}
      {/*  <div className="menu-item collapse-item">*/}
      {/*    <Link to="/visa">Визы</Link>*/}
      {/*    <button name="visa" onClick={toggleVisible} className="menu-button"><img name="visa" className={`collapse-arrow ${visibleItems.visa ? 'active' : null}`} src={collapseArrow} /></button>*/}
      {/*  </div>*/}
      {/*  <div className={`${visibleItems.visa ? null : 'hidden'} detail-links`}>*/}
      {/*    <Link className="menu-item" to="/visa/guestVisa">Гостевые Визы</Link>*/}
      {/*    <Link className="menu-item" to="/visa/studentVisa">Студенческие Визы</Link>*/}
      {/*    <Link className="menu-item" to="/visa/workVisa">Рабочие Визы</Link>*/}
      {/*    <Link className="menu-item" to="/visa/superVisa">Супер Визы</Link>*/}
      {/*    <Link className="menu-item" to="/visa/restorationStatus">Продление и Восстановление Статуса</Link>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<Link className="menu-item" to="/lmia">Оценка Рынка Труда (LMIA)</Link>*/}
      {/*<Link className="menu-item" to="/humanities">Гуманитарная Программа</Link>*/}
      {/*<Link className="menu-item" to="/citizenship">Гражданство</Link>*/}
      {/*<Link className="menu-item" to="/">Получить консультацию</Link>*/}
      {/*<Link className="menu-item" to="/about">О нас</Link>*/}
      {/*<Link className="menu-item" to="#">Отзывы</Link>*/}
      {/*<Link className="menu-item" to="/news">Новости</Link>*/}
      {/*<Link className="menu-item" to="/questions">Вопросы</Link>*/}
      {/*<Link className="menu-item" to="/contact">Контакты</Link>*/}

      <nav className={`nav-drill ${visibleItems.mobileMenu ? "opened" : ""}`}>
        <ul className="nav-items nav-level-1">
          <li
            className={`nav-item nav-expand ${
              visibleItems.services ? "active" : ""
            }`}
          >
            <span name="services" onClick={openLevel}>
              <Link name="services" className="nav-link nav-expand-link" to="/chance">
                Услуги
              </Link>
              <img name="services" src={collapseArrow} />
            </span>
            <ul className="nav-items nav-expand-content">
              <li className={`nav-item nav-expand ${visibleItems.services === true ? 'active' : ''}`}>
                <Link className="nav-link nav-expand-link" href="#">
                  Иммиграция
                </Link>
                <ul className="nav-items nav-expand-content">
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Express Entry
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Провинциальные Программы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Бизнес Иммиграция
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Спонсорство
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-expand">
                <span>
                  <Link className="nav-link nav-expand-link" href="#">
                    Визы
                  </Link>
                  <img src={collapseArrow} />
                </span>
                <ul className="nav-items nav-expand-content">
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Гостевые Визы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Студенческие Визы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Рабочие Визы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Супер Визы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Продление и Восстановление Статуса
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Оценка Рынка Труда (LMIA)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Гуманитарная Программа
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Гражданство
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              О нас
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Отзывы
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Новости
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Вопросы
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Контакты
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Получить консультацию
            </Link>
          </li>
          <li id="chance-link" className="nav-item">
            <Link className="nav-link" href="#">
              БЕСПЛАТНАЯ ОЦЕНКА ШАНСОВ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderMobile
