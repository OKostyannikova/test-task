import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="wrapper page-footer__wrapper">
        <p className="coopyright ">&copy; 2016 Dirty Dogs all rights reserved</p>
        <ul className="page-footer__contacts ">
          <li className="page-footer__contacts-item">
            <a href="# " className="page-footer__contacts-link ">274 Marconi Blvd. Columbus, Ohio 43215</a>
          </li>
          <li className="page-footer__contacts-item">
            <a href="# " className="page-footer__contacts-link ">614.538.0095</a>
          </li>
          <li className="page-footer__contacts-item">
            <a href="contact.html" className="page-footer__contacts-link ">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
