import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/kultura-logo.png';
import '../styles/header.scss';

export default function Header() {
  return (
    <nav className="header__background">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link to="/">
            <img
              src={Logo}
              alt=""
              width={250}
              className="d-inline-block align-top"
            />
          </Link>
        </a>
      </div>
    </nav>
  );
}
