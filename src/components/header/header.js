import React, { useCallback, useState } from "react"
import "./header.sass"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import arrow from "./../../images/pin.svg"

const Header = () => {
  const [visibleObjects, setVisible] = useState({
    background: false,
    secondLevel: null,
  });

  const enableDisplay = useCallback(e => {
      const name = e.target.getAttribute("name");
      setVisible(prev => ({
        [name]: true,
        background: true,
      }))
    },
    [setVisible]
  );

  const toggleSecondLevelNavigation = useCallback(e => {
    const name = e.target.getAttribute('name');
    setVisible(prev => ({
      ...prev,
      secondLevel: name,
    }));
  }, [setVisible]);

  const resetDisplay = useCallback(() => {
    setVisible({
      secondLevel: null,
      background: false
    })
  });

  return (
    <header onMouseLeave={resetDisplay} className="navigation-header">
      <nav className="meta-nav on-content-layout">
        <span>
          <a href="/">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className="footer-svg-button svg-layout"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M15 0L0 8.43751L4.79371 10.213L12.1875 3.28126L6.56355 10.8685L6.56812 10.8702L6.56252 10.8685V15L9.25081 11.8637L12.6563 13.125L15 0Z"
                  fill="#8C939F"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="/">
            <svg
              className="svg-layout"
              id="viber-svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.47715 15C3.47715 14.4294 3.38394 13.0278 3.38312 12.6127C3.3828 12.43 3.25876 12.3769 3.10994 12.3291C2.20441 12.0387 1.45842 11.5305 0.927901 10.7257C0.453866 10.0067 0.220448 9.20631 0.120912 8.36233C-0.0721454 6.7263 -0.0572039 5.09397 0.336337 3.48764C0.684324 2.06695 1.53577 1.08371 2.94162 0.575012C4.61481 -0.0305373 6.33753 -0.0399213 8.07778 0.0288652C8.92162 0.0622107 9.75385 0.15915 10.5647 0.388969C11.4281 0.633685 12.2798 0.919172 12.8918 1.63546C13.3287 2.14685 13.5908 2.75085 13.7608 3.39444C14.147 4.8564 14.1547 6.33905 14.0206 7.835C13.9556 8.55903 13.8723 9.27396 13.6128 9.9549C13.1165 11.2572 12.1603 12.0181 10.8185 12.3576C9.28077 12.7467 7.72387 12.8959 6.14365 12.8366C5.92481 12.8284 5.79553 12.9396 5.66269 13.086C4.84914 13.8672 3.53787 14.9434 3.47715 15Z"
                fill="#8C939F"
              />
              <path
                d="M10.4933 9.22539C10.4358 9.73851 10.1542 10.025 9.87314 10.2987C9.55572 10.6078 9.17794 10.7914 8.72609 10.6105C8.37902 10.4716 8.03868 10.3132 7.70459 10.1451C6.65544 9.6177 5.73493 8.91271 4.94101 8.05192C4.00055 7.03215 3.26508 5.88246 2.83246 4.55278C2.71935 4.2052 2.77861 3.8953 3.05248 3.65701C3.30426 3.43789 3.57162 3.23135 3.85419 3.05451C4.05804 2.92696 4.30508 2.93958 4.49076 3.10517C5.00784 3.56617 5.43081 4.10508 5.70504 4.74479C5.79797 4.96167 5.77748 5.19035 5.5651 5.35836C5.46115 5.44054 5.36321 5.53023 5.26112 5.61478C4.9801 5.84747 4.93637 6.00923 5.04884 6.35339C5.30453 7.13592 5.85401 7.67769 6.51723 8.11433C6.74103 8.26165 7.00251 8.35713 7.25557 8.45298C7.47117 8.53461 7.65093 8.44478 7.78955 8.26871C7.86184 8.17687 7.932 8.08335 8.00616 7.99315C8.21767 7.73605 8.58916 7.65104 8.86549 7.8359C9.35082 8.16047 9.82804 8.49903 10.2887 8.85727C10.4048 8.94751 10.4453 9.13455 10.4933 9.22539Z"
                fill="#F9F9F9"
              />
              <path
                d="M11.1887 7.01846C11.006 7.01846 10.8579 6.87032 10.8579 6.68765C10.8579 4.39596 8.9935 2.53162 6.702 2.53162C6.51933 2.53162 6.37119 2.38348 6.37119 2.20081C6.37119 2.01814 6.51933 1.87 6.702 1.87C9.35839 1.87 11.5196 4.03121 11.5196 6.6876C11.5196 6.87032 11.3715 7.01846 11.1887 7.01846Z"
                fill="#F9F9F9"
              />
              <path
                d="M9.96508 7.01842C9.78236 7.01842 9.63426 6.87028 9.63426 6.68761C9.63426 5.07076 8.31885 3.75525 6.702 3.75525C6.51933 3.75525 6.37119 3.60711 6.37119 3.42444C6.37119 3.24177 6.51933 3.09363 6.702 3.09363C8.68364 3.09363 10.2959 4.70583 10.2959 6.68756C10.2959 6.87028 10.1478 7.01842 9.96508 7.01842Z"
                fill="#F9F9F9"
              />
              <path
                d="M8.7415 7.01826C8.55878 7.01826 8.41068 6.87012 8.41068 6.68745C8.41068 5.7453 7.64415 4.97876 6.702 4.97876C6.51933 4.97876 6.37119 4.83062 6.37119 4.64795C6.37119 4.46528 6.51933 4.31714 6.702 4.31714C8.00894 4.31714 9.07226 5.38046 9.07226 6.6874C9.07226 6.87012 8.92421 7.01826 8.7415 7.01826Z"
                fill="#F9F9F9"
              />
            </svg>
          </a>
          <a className="footer-contact-link" href="tel:+79017030104">
            +1 (647) 515-6748
          </a>
        </span>
        <span>
          <a className="footer-contact-link" href="mailto: info@mymci.ca">
            <svg
              className="footer-svg-button svg-layout"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.313152 2.78777C2.37184 4.53126 5.98421 7.59858 7.04592 8.55498C7.18845 8.68406 7.34132 8.74969 7.50003 8.74969C7.6584 8.74969 7.81101 8.68468 7.95322 8.55621C9.01585 7.59888 12.6282 4.53126 14.6869 2.78777C14.8151 2.67943 14.8346 2.489 14.7309 2.35655C14.491 2.05049 14.1333 1.875 13.75 1.875H1.25004C0.866745 1.875 0.50906 2.05049 0.269206 2.35658C0.165437 2.489 0.184978 2.67943 0.313152 2.78777Z"
                fill="#8C939F"
              />
              <path
                d="M14.8187 3.7325C14.708 3.68094 14.5777 3.69893 14.4855 3.77768C12.2024 5.71309 9.28863 8.19389 8.37188 9.01997C7.85733 9.48444 7.14322 9.48444 6.62748 9.01936C5.65031 8.13893 2.3782 5.35725 0.514512 3.77765C0.421729 3.6989 0.291123 3.68153 0.18126 3.73247C0.0708105 3.78377 0 3.89425 0 4.01601V11.8749C0 12.5643 0.560596 13.1249 1.25001 13.1249H13.75C14.4394 13.1249 15 12.5643 15 11.8749V4.01601C15 3.89425 14.9292 3.78348 14.8187 3.7325Z"
                fill="#8C939F"
              />
            </svg>
            info@mymci.ca
          </a>
        </span>
      </nav>
      <nav className="main-nav">
        <Link id="header-logo" className="content-link" to="/">
          <img src={logo} />
        </Link>
        <div>
          <div name="services" onMouseEnter={enableDisplay} className="content-link">
            <Link name="services" to="/services">
              Услуги
            </Link>
            <img name="services" src={arrow} />
          </div>
          <div className={`${visibleObjects.services ? null : "hidden"}`}>
            <div className={`detail-content-links`}>
              <div onMouseEnter={toggleSecondLevelNavigation} name="immigration" className="content-link detail-content-link">
                <Link name="immigration" className="content-link" to="/immigration">Иммиграция</Link>
                <img className="detail-arrow" name="immigration" src={arrow} />
              </div>
              <div onMouseEnter={toggleSecondLevelNavigation} name="visa" className="content-link detail-content-link">
                <Link name="visa" className="content-link" to="/visa">Визы</Link>
                <img className="detail-arrow" name="visa" src={arrow} />
              </div>
              <Link className="content-link detail-content-link" to="/lmia">Оценка Рынка Труда (LMIA)</Link>
              <Link className="content-link detail-content-link" to="/humanities">Гуманитарная Программа</Link>
              <Link className="content-link detail-content-link" to="/citizenship">Гражданство</Link>
            </div>
          </div>
        </div>
        <Link className="content-link" to="/about">
          О нас
        </Link>
        <Link className="content-link" to="/reviews">
          Отзывы
        </Link>
        <div>
          <Link className="content-link" to="/news">
            новости
          </Link>
          <div className={`${visibleObjects.secondLevel === 'immigration' ? null : "hidden"} detail-content-links`}>
            <Link className="content-link detail-content-link" to="/immigration/expressEntry">Express Entry</Link>
            <Link className="content-link detail-content-link" to="/immigration/provincialPrograms">Провинциальные Программы</Link>
            <Link className="content-link detail-content-link" to="/immigration/businessImmigration">Бизнес Иммиграция</Link>
            <Link className="content-link detail-content-link" to="/immigration/familySponsorship">Семейное спонсорство</Link>
          </div>
          <div className={`${visibleObjects.secondLevel === 'visa' ? null : "hidden"} detail-content-links`}>
            <Link className="content-link detail-content-link" to="/visa/guestVisa">Гостевые Визы</Link>
            <Link className="content-link detail-content-link" to="/visa/studentVisa">Студенческие Визы</Link>
            <Link className="content-link detail-content-link" to="/visa/workVisa">Рабочие Визы</Link>
            <Link className="content-link detail-content-link" to="/visa/superVisa">Супер Визы</Link>
            <Link className="content-link detail-content-link" to="/visa/restorationStatus">Продление и Восстановление Статуса</Link>
          </div>
        </div>
        <Link className="content-link" to="/questions">
          Вопросы
        </Link>
        <Link className="content-link" to="/contact">
          Контакты
        </Link>
        <Link className="content-link" to="/consultation">
          Получить консультацию
        </Link>
        <Link id="accent-link" to="/chance">
          БЕСПЛАТНАЯ ОЦЕНКА ШАНСОВ
        </Link>
        <div
          className={`${
            visibleObjects.background ? null : "hidden"
          } detail-background`}
        />
      </nav>
    </header>
  )
}

export default Header
