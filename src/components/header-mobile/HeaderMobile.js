import React, { useCallback, useState } from 'react';
import { Container, Form, FormControl, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'gatsby';
import './headerMobile.sass';
import menu from '../../images/header/menu.png';
import closeMenu from '../../images/header/menu-back.png';
import logo from '../../images/header/logo.png'
import phone from '../../images/header/phone.png'
const HeaderMobile = () => {
  const [toggled, toggle] = useState(true);

  const toggleMenu = useCallback(() => toggle(!toggled),
    [toggle, toggled]
  );

  return (
    <Navbar onToggle={toggleMenu} collapseOnSelect bg="white" expand="md" fixed="top" className="d-sm-flex d-md-none nav-wrapper col-12">
      <Container className="navbar-mobile col-12">
        <Navbar.Toggle className="navbar-mobile-toggle"> {toggled ? <Image src={menu} /> : <Image src={closeMenu}/>}</Navbar.Toggle>
        <Navbar.Brand as={Link} to="#"><Image src={logo} /></Navbar.Brand>
        <Nav.Link as={Link}><Image src={phone} /></Nav.Link>
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="align-items-start navbar-mobile-menu">
          <Nav.Link as={Link} to="#">Образование</Nav.Link>
          <Nav.Link as={Link} to="#">Работа</Nav.Link>
          <NavDropdown as={Link} to="#hell" title="Иммиграция" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="#sss1">Экономическая иммиграция</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#sss2">Провинциальные программы</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#sss3">Иммиграция для бизнесменов и предпринимателей</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Визы" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="#sss1">Экономическая иммиграция</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#sss2">Провинциальные программы</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#sss3">Иммиграция для бизнесменов и предпринимателей</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="#linktohell">Гуманитарная программа</Nav.Link>
          <NavDropdown title="Семейное спонсорство" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="#sss1">Экономическая иммиграция</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#sss2">Провинциальные программы</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#sss3">Иммиграция для бизнесменов и предпринимателей</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="#linkto">Гражданство</Nav.Link>
          <NavDropdown title="Изменение статуса" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="#sss1">Экономическая иммиграция</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#sss2">Провинциальные программы</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#sss3">Иммиграция для бизнесменов и предпринимателей</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="#">Анкета</Nav.Link>
          <Nav.Link as={Link} to="#">О нас</Nav.Link>
          <Nav.Link as={Link} to="#">Отзывы</Nav.Link>
          <Nav.Link as={Link} to="#">Новости</Nav.Link>
          <Nav.Link as={Link} to="#">Вопросы</Nav.Link>
          <Nav.Link as={Link} to="#">Контакты</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderMobile;
