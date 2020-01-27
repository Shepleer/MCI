import React, { useCallback, useState } from "react"
import { Link } from "gatsby"
import "./headerMobile.sass"
import logo from "../../images/logo.svg"
import phone from "../../images/header/phone.png"
import collapseArrow from "./../../images/collapse-arrow.png"

const HeaderMobile = () => {
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
      }))
    },
    [setVisible]
  )

  const closeLevel = useCallback(
    e => {
      const name = e.target.getAttribute("name")
      setVisible(prev => ({
        ...prev,
        [name]: false,
      }))
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
      <nav className={`nav-drill ${visibleItems.mobileMenu ? "opened" : ""}`}>
        <ul className="nav-items nav-level-1">
          <li
            className={`nav-item nav-expand ${
              visibleItems.services ? "active" : ""
            }`}
          >
            <span
              name="services"
              className="expand-link-wrapper on-content-layout"
              onClick={openLevel}
            >
              <Link name="services" className="nav-link nav-expand-link" to="/services">
                Услуги
              </Link>
              <img name="services" src={collapseArrow} />
            </span>
            <ul className="nav-items nav-expand-content">
              <li className="nav-item">
                <button
                  onClick={closeLevel}
                  name="services"
                  className="nav-link nav-back-link on-content-layout"
                >
                  Назад
                </button>
              </li>
              <li
                className={`nav-item nav-expand ${
                  visibleItems.immigration ? "active" : ""
                }`}
              >
                <span
                  name="immigration"
                  className="expand-link-wrapper on-content-layout"
                  onClick={openLevel}
                >
                  <Link className="nav-link nav-expand-link" to="/immigration">
                    Иммиграция
                  </Link>
                  <img name="immigration" src={collapseArrow} />
                </span>
                <ul className="nav-items nav-expand-content">
                  <li className="nav-item">
                    <button
                      onClick={closeLevel}
                      name="immigration"
                      className="nav-link nav-back-link on-content-layout"
                    >
                      Назад
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link on-content-layout"
                      to="/immigration/expressEntry"
                    >
                      Express Entry
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link on-content-layout"
                      to="/immigration/provincialPrograms"
                    >
                      Провинциальные Программы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link on-content-layout"
                      to="/immigration/businessImmigration"
                    >
                      Бизнес Иммиграция
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link on-content-layout"
                      to="/immigration/familySponsorship"
                    >
                      Спонсорство
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item nav-expand ${
                  visibleItems.visa ? "active" : ""
                }`}
              >
                <span
                  name="visa"
                  className="expand-link-wrapper on-content-layout"
                  onClick={openLevel}
                >
                  <Link
                    name="visa"
                    className="nav-link nav-expand-link"
                    to="/visa"
                  >
                    Визы
                  </Link>
                  <img name="visa" src={collapseArrow} />
                </span>
                <ul className="nav-items nav-expand-content">
                  <li className="nav-item">
                    <button
                      onClick={closeLevel}
                      name="visa"
                      className="nav-link nav-back-link on-content-layout"
                    >
                      Назад
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link on-content-layout"
                      to="/visa/guestVisa"
                    >
                      Гостевые Визы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link on-content-layout"
                      to="/visa/studentVisa"
                    >
                      Студенческие Визы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link on-content-layout"
                      to="/visa/workVisa"
                    >
                      Рабочие Визы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link on-content-layout"
                      to="/visa/superVisa"
                    >
                      Супер Визы
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link on-content-layout"
                      to="/visa/restorationStatus"
                    >
                      Продление и Восстановление Статуса
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link on-content-layout" to="/lmia">
                  Оценка Рынка Труда (LMIA)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link on-content-layout" to="/humanities">
                  Гуманитарная Программа
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link on-content-layout" to="/citizenship">
                  Гражданство
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link on-content-layout" to="/about">
              О нас
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link on-content-layout" to="/reviews">
              Отзывы
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link on-content-layout" to="/news">
              Новости
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link on-content-layout" to="/questions">
              Вопросы
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link on-content-layout" to="/contact">
              Контакты
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link on-content-layout" to="/consultation">
              Получить консультацию
            </Link>
          </li>
          <li id="chance-link" className="nav-item">
            <Link className="nav-link on-content-layout" to="/chance">
              БЕСПЛАТНАЯ ОЦЕНКА ШАНСОВ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderMobile
