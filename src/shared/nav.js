import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './logo';
import '../styles/nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <nav className="toggle">
      <div className="logo">
        <div className="logo-bg">
          <svg viewBox="0 0 520 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H283L198.644 88H0V0Z" fill="#6F5D5D"/>
          </svg>
        </div>
        <Link to="/" className="lin" title="logo">
          <Logo />
        </Link>
      </div>
      <div className="nav-links">
        <div className="link-bg">
          <svg viewBox="0 0 80 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M283 0H5.24521e-06L84.3558 88H283V0Z" fill="#6F5D5D"/>
          </svg>
        </div>
        <div className="links-ctn">
          <Link to="/" className="link" title="home">
            <FontAwesomeIcon
              icon="home"
              color="#fcc395"
              size="1x"
            />
          </Link>
          <Link to="/gallery" className="link" title="gallery">
            <FontAwesomeIcon
              icon="th-large"
              color="#fcc395"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;