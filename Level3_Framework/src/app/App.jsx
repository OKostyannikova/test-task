import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <ProductsList />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));