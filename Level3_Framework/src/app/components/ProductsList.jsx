import React, { Component } from 'react';
import Product from './Product';
import filterByExpiration from '../lib/filterByExpiration';
import ajax from '../lib/ajax';


export default class ProductList extends Component {
  state = {
    productsList: null
  }

  componentDidMount() {
    ajax(' https://formula-test-api.herokuapp.com/menu')
      .then(data => {
        this.setState({
          productsList: filterByExpiration(data)
        })
      })
  }

  getProductsList = () => {
    const { productsList } = this.state;
    return (
      <ul className="produsts__list">
        {productsList.map(product => <Product key={product.id} product={product} />)}
      </ul>
    )
  }

  render() {
    const { productsList } = this.state;
    const isAllDataReady = productsList && productsList.length > 0;

    return (
      <section className="products" >
        <div className="wrapper">
          {isAllDataReady && this.getProductsList()}
        </div>
      </section>
    )
  }
}