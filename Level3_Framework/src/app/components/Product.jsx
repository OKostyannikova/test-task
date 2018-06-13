import React, { Component } from 'react';

export default function Product({ product }) {
  return (
    <li className="products__item">
      <div className="products__description">
        <h2 className="products__title">{product.name}</h2>
        <p className="products_text">{product.description}</p>
      </div>
      <div className="products__img">
        <img src={product.backgroundURL} alt="Beef Hotdogs" />
      </div>
    </li>
  )
}