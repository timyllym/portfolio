import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <div>Portfolio</div>
        <div className="my-name">Timo Myllymäki</div>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to="/design" className="nav-link">Design</NavLink>
        <NavLink to="/video" className="nav-link">Video</NavLink>
        <NavLink to="/code" className="nav-link">Code</NavLink>
      </Nav>
    </Navbar>
  );
}
