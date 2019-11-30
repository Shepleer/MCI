import React from 'react';
import './header.sass';
import { Dropdown, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'gatsby';
import logo from './../../images/logo.png';
import searchIcon from './../../images/searchIcon.svg';
import AccentButton from '../reusable/AccentButton';

const Header = ({ siteTitle }) => (
  <header className="header-container">
    <Navbar className="meta-navbar">
      <Nav className="meta mr-auto ml-md-5 ml-md-5 ml-xl-6">
        <Link className="nav-link pl-0" to="/about">О нас</Link>
        <Link className="nav-link" to="#">Отзывы</Link>
        <Link className="nav-link" to="#">Новости</Link>
        <Link className="nav-link" to="/questions">Вопросы</Link>
        <Link className="nav-link" to="/contact">Контакты</Link>
      </Nav>
      <Form className="search-form mr-md-5 mr-md-5 mr-xl-6">
        <Image className="image" src={searchIcon} alt="Search ico" />
      </Form>
    </Navbar>

    <Navbar className="separator">
      <Nav.Item>
        <Navbar.Brand className="ml-md-5 ml-md-5  ml-xl-6" as={Link} to="/" >
          <Image src={logo} />
        </Navbar.Brand>
      </Nav.Item>
      <Nav.Item className="ml-auto mr-5 pr-0 pr-xl-5" >
        <h3 className="phone-number">+7901 703-01-04</h3>
      </Nav.Item>
      <Nav.Item className="mr-md-5 mr-md-5 mr-xl-6">
        <AccentButton />
      </Nav.Item>
    </Navbar>

    <Navbar className="main-nav text-center">
      <Nav.Item className="ml-md-5 ml-xl-6 mr-auto">
        <Link className="nav-link" to="#">ОБРАЗОВАНИЕ</Link>
      </Nav.Item>
      <Nav.Item className="mx-auto">
        <Link className="nav-link" to="#">РАБОТА</Link>
      </Nav.Item>
      <Dropdown as={Nav.Item} className="mx-auto">
        <Dropdown.Toggle as={Nav.Link}>ИММИГРАЦИЯ</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item><Link className="nav-link" to="#">Экономическая иммиграция</Link></Dropdown.Item>
          <Dropdown.Item><Link className="nav-link" to="#">Провинциальные программы</Link></Dropdown.Item>
          <Dropdown.Item><Link className="nav-link" to="#">Иммиграция для бизнесменов и предпринимателей</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Nav.Item className="mx-auto">
        <Link className="nav-link" to="#">ВИЗЫ</Link>
      </Nav.Item>
      <Nav.Item className="mx-auto">
        <Link className="nav-link" to="/humanities">ГУМАНИТАРНАЯ ПРОГРАММА</Link>
      </Nav.Item>
      <Nav.Item className="mx-auto">
        <Link className="nav-link" to="#">СЕМЕЙНОЕ СПОНСОРСТВО</Link>
      </Nav.Item>
      <Nav.Item className="mx-auto">
        <Link className="nav-link" to="#">ГРАЖДАНСТВО</Link>
      </Nav.Item>
      <Nav.Item className="mx-auto">
        <Link className="nav-link" to="#">ИЗМЕНЕНИЕ СТАТУСА</Link>
      </Nav.Item>
      <Nav.Item className="mr-md-5 mr-md-5 mr-xl-6 ml-auto">
        <Link className="nav-link" to="#">КОНСУЛЬТАЦИЯ</Link>
      </Nav.Item>
    </Navbar>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
