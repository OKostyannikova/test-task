import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './app/components/ContactForm'
import './scss/contact.scss';

function App() {
  return <div className="wrapper contact-form__wrapper">
    <ContactForm />
  </div>
}

ReactDOM.render(<App />, document.getElementById('contact-page'));