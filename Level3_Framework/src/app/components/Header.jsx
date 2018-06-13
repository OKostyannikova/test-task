import React, { Component } from 'react';
import PageNav from './PageNav';

export default function Header() {
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <a href="#" className="instagram-link">
          <img src="img/instagram-icon.png" alt="instagram" /> #hotdogs
      </a>
      </div>
      <PageNav />
    </header>
  )
}