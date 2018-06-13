import React, { Component } from 'react';
import toggleMobileMenu from '../lib/toggleMobileMenu';

export default function PageNav() {
   return (
    <nav className="page-nav">
    <div className="wrapper">
      <div onClick={toggleMobileMenu} className="nav-toggle-btn 
      nav-toggle-btn--open" area-label="Открыть меню" tabIndex="0"></div>

      <ul className="page-nav__list">
        <li className="page-nav__item">
          <a href="#" className="page-nav__link">Menu</a>
        </li>
        <li className="page-nav__item">
          <a href="#" className="page-nav__link">Catering</a>
        </li>
        <li className="page-nav__item">
          <a href="#" className="page-nav__link">About us</a>
        </li>
        <li className="page-nav__item">
          <a href="contact.html" className="page-nav__link">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}