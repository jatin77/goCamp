import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './navbar.css';

function Navbar(props) {
  let toggleNavClass;
  let toggleNavUlClass;
  let toggleNavLinkClass;

  if (props.showNav) {
    toggleNavClass = 'nav show';
    toggleNavUlClass = 'nav-ul show';
    toggleNavLinkClass = 'nav-link show';
  } else {
    toggleNavClass = 'nav';
    toggleNavUlClass = 'nav-ul';
    toggleNavLinkClass = 'nav-link';
  }

  return (
    <nav className={toggleNavClass}>
      <ul className={toggleNavUlClass}>
        <Link to='/' className={toggleNavLinkClass}>
          <h1>Intro</h1>
          <h1>00</h1>
        </Link>
        <Link to='/building' className={toggleNavLinkClass}>
          <h1>The Building</h1>
          <h1>01</h1>
        </Link>
        <Link to='/neighbourhood' className={toggleNavLinkClass}>
          <h1>Neighbourhood</h1>
          <h1>02</h1>
        </Link>
        <Link to='/vision' className={toggleNavLinkClass}>
          <h1>Our Vision</h1>
          <h1>03</h1>
        </Link>
        <Link to='/pursuit' className={toggleNavLinkClass}>
          <h1>The Pursuit</h1>
          <h1>04</h1>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
