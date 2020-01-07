import React, { useCallback, useState } from 'react';
import './header.sass';
import { Link } from 'gatsby';
import logo from './../../images/logo.png';
import AccentButton from '../reusable/AccentButton';
import arrow from './../../images/pin.svg';

const Header = () => {

  const [visibleObjects, setVisible] = useState({
    background: false,
  });

  const toggleDisplay = useCallback((e) => {
    const name = e.target.getAttribute('name');
    setVisible(prev => ({
      [name]: !prev[name],
      background: !prev[name],
    }));
  }, [setVisible]);

  const resetDisplay = useCallback(() => {
    setVisible({ background: false });
  });

  return (
    <header className="navigation-header">
      <nav className="meta-nav separator on-content-layout">
        <div className="meta-links">
          <Link to="/">
            <img src={logo} />
          </Link>
          <Link className="meta-link" to="/about">О нас</Link>
          <Link className="meta-link" to="/reviews">Отзывы</Link>
          <Link className="meta-link" to="/news">Новости</Link>
          <Link className="meta-link" to="/questions">Вопросы</Link>
          <Link className="meta-link" to="/contact">Контакты</Link>
        </div>
        <div className="chance-link">
          <h3 className="phone-number">+7901 703-01-04</h3>
          <AccentButton id="header-accent-button" title="БЕСПЛАТНАЯ ОЦЕНКА ШАНСОВ" to="/chance" />
        </div>
      </nav>
      <nav onMouseLeave={resetDisplay} className="content-nav">
        <div className="content-links on-content-layout">
          <div>
            <div name="immigration" onMouseEnter={toggleDisplay} className="content-link">
              <Link name="immigration" to="/immigration">Иммиграция</Link>
              <img name="immigration" src={arrow} />
            </div>
            <div className={`${visibleObjects.immigration ? null : 'hidden'} detail-content-links`}>
              <Link className="content-link" to="/immigration/expressEntry">Express Entry</Link>
              <Link className="content-link" to="/immigration/provincialPrograms">Провинциальные Программы</Link>
              <Link className="content-link" to="/immigration/businessImmigration">Бизнес Иммиграция</Link>
              <Link className="content-link" to="/immigration/familySponsorship">Семейное спонсорство</Link>
            </div>
          </div>
          <div>
            <div name="visa" onMouseEnter={toggleDisplay} className="content-link">
              <Link name="visa" to="/visa">Визы</Link>
              <img name="visa" src={arrow} />
            </div>
            <div className={`${visibleObjects.visa ? null : 'hidden'} detail-content-links`}>
              <Link className="content-link" to="/visa/guestVisa">Гостевые Визы</Link>
              <Link className="content-link" to="/visa/studentVisa">Студенческие Визы</Link>
              <Link className="content-link" to="/visa/workVisa">Рабочие Визы</Link>
              <Link className="content-link" to="/visa/superVisa">Супер Визы</Link>
              <Link className="content-link" to="/visa/restorationStatus">Продление и Восстановление Статуса</Link>
            </div>
          </div>
          <Link className="content-link" to="/lmia">Оценка Рынка Труда (LMIA)</Link>
          <Link className="content-link" to="/humanities">Гуманитарная Программа</Link>
          <Link className="content-link" to="/citizenship">Гражданство</Link>
          <Link className="content-link" to="/consultation">Получить консультацию</Link>
        </div>
        <div className={`${visibleObjects.background ? null : 'hidden'} detail-background`} />
      </nav>
    </header>
  );
};

export default Header;
