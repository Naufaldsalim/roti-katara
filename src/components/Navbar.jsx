import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LogoKastara from "../../public/Logo Kastara Fix.svg";
import { Link } from 'react-scroll';
import "../styles/Navbar.css";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['intro', 'katalog', 'kastara', 'history', 'testimoni', 'kontak'];

    const handleScroll = () => {
      const offsets = sections.map(section => {
        const element = document.getElementById(section);
        return element ? { id: section, offsetTop: element.offsetTop, offsetHeight: element.offsetHeight } : null;
      }).filter(section => section);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = offsets.find(section => 
        scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className='logo-container'>
          <img
            src={LogoKastara}
            height="40"
            className="d-inline-block align-top"
            alt="Kastara logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='opsi-navbar'>
          <Nav className="ml-auto">
            <Nav.Link 
              as={Link} 
              to="intro" 
              smooth={true} 
              duration={500}
              className={activeSection === 'intro' ? 'active' : ''}
            >
              Beranda
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="katalog" 
              smooth={true} 
              duration={500} 
              offset={-50}
              className={activeSection === 'katalog' ? 'active' : ''}
            >
              Katalog
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="kastara" 
              smooth={true} 
              duration={500} 
              offset={-20}
              className={activeSection === 'kastara' ? 'active' : ''}
            >
              Kastara
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="history" 
              smooth={true} 
              duration={500} 
              offset={-50}
              className={activeSection === 'history' ? 'active' : ''}
            >
              Tentang Kami
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="testimoni" 
              smooth={true} 
              duration={500} 
              offset={-20}
              className={activeSection === 'testimoni' ? 'active' : ''}
            >
              Testimoni
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="kontak" 
              smooth={true} 
              duration={500}
              className={activeSection === 'kontak' ? 'active' : ''}
            >
              Kontak
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
