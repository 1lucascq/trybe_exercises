import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addProduct } from '../services/manageCart';

export default class CardProduct extends Component {
  constructor() {
    super();
    this.saveInLocalStorage = this.saveInLocalStorage.bind(this);
  }

  saveInLocalStorage() {
    const { product, getCartQuantity } = this.props;
    addProduct(product);
    getCartQuantity();
  }

  render() {
    const { product:
      { price, thumbnail, title, id, shipping } } = this.props;
    const freeShipping = shipping.free_shipping;
    return (
      <div data-testid="product">
        <Link
          to={ `/detailProduct/${id}` }
          data-testid="product-detail-link"
        >
          <h4>{title}</h4>
          <img width="50px" src={ thumbnail } alt="product logo" />
          <p>{price}</p>
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.saveInLocalStorage }
          type="button"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0BWuHgxw4SK8_
            8IPduATr0KXh4mgQjxIDA&usqp=CAU"
            alt="logo cart"
            width="30px"
          />
        </button>
        <div>
          { freeShipping && <span data-testid="free-shipping">Frete Grátis</span> }
        </div>
      </div>
    );
  }
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.string,
    }),
  }).isRequired,
  getCartQuantity: PropTypes.func.isRequired,
};
