import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Rating from '../../components/Rating';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { title, price, thumbnail, attributes } } } = this.props;
    const { func } = this.props;

    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h2>{` R$ ${price} `}</h2>
        <img src={ thumbnail } alt={ title } />
        <div>
          <ul>
            {attributes.map(({ value_name: value, name, id }) => (
              <li key={ id }>
                { `${name} : ${value}`}
              </li>))}
          </ul>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => func({ title, price, thumbnail, id: '' }) }
        >
          Adionar ao carrinho
        </button>
        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="button">Cart</button>
        </Link>
        <div id="evaluate-container">
          <input type="email" placeholder="mail@mail.com" />
          <Rating />
          <textarea
            name="message"
            id="input-message"
            cols="30"
            rows="10"
            data-testid="product-detail-evaluation"
          />
          <button id="button-evaluate" type="button">Avaliar produto</button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      attributes: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
}.isRequired;

export default ProductDetails;
