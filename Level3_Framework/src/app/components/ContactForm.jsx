import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    isFormSent: false
  }

  sendForm = (ev) => {
    ev.preventDefault();
    const form = document.querySelector('.contact-form');

    const xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://formula-test-api.herokuapp.com/contact');

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify({
      "name": form.userName.value,
      "email": form.email.value,
      "comment": form.comment.value
    }))

    this.setState({
      isFormSent: true
    })

  }

  getBody() {
    if (this.state.isFormSent) {
      return (
        <div className="contact-form__message">
          <p className="contact-form__text">Thank you for contacting us!</p>
          <a href="index.html" className="contact-form__back-link">Back to Home page</a>
        </div>
      )
    } else {
      return (
        <form className="contact-form">
          <h1 className="contact-form__title">Contact Us</h1>
          <p className="contact-form__item">
            <label htmlFor="userName" className="contact-form__label">Name:</label>
            <input type="text" name="userName" id="userName" placeholder="John Smith" className="contact-form__input"/>
          </p>
          <p className="contact-form__item">
            <label htmlFor="email" className="contact-form__label">Email:</label>
            <input type="e-mail" name="email" id="email" placeholder="example@gmail.com" className="contact-form__input"/>
          </p>
          <p className="contact-form__item">
            <label htmlFor="comment" className="contact-form__label">Comment:</label>
            <textarea name="comment" id="comment" className="contact-form__input"/>
          </p>
          <p className="contact-form__item">
            <button onClick={this.sendForm} type="submit" className="button contact-form__button">Submit Form</button>
          </p>
        </form>
      )
    }
  }

  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    )
  }
}