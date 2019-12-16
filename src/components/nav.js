import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        RECIPE-HOMES
      </div>
      <div className="nav-links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Gallery
        </Link>
      </div>
    </nav>
  )
}

export default Nav;