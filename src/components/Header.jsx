import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar
      style={{ 
        zIndex: 1, 
        marginBottom: '20px', 
        width: '100%', 
        backgroundColor: '#6f42c1' 
      }}
      className="bg-body-tertiary"
    >
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand style={{ color: 'violet' }} className="fs-5 fw-bolder">
            <i className="fa-solid fa-music me-2"></i>
            Media Player
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
