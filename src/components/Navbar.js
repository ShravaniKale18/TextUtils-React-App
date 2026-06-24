import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        {props.title}
      </a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            {props.homeText}
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            {props.aboutText}
          </a>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set Title Here",
  homeText: "Home",
  aboutText: "About"
}