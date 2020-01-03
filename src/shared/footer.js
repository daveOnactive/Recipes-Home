import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.scss';

const Footer = ({type}) => {
  return (
    <footer className="footer">
      <span className={type === 'dark'? 'dark' : 'light'}>Made with <FontAwesomeIcon icon="heart" color="red" /> by Dave</span>
    </footer>
  )
};

export default Footer;