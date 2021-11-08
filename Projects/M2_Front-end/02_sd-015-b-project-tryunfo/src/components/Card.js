import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteCard,
    } = this.props;

    return (
      <div className="card-div">
        <div>
          <h2 data-testid="name-card">{cardName}</h2>
        </div>

        <div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>

        <div>
          <p data-testid="description-card">
            {`Descrição: ${cardDescription}`}
          </p>
        </div>

        <div>
          <p data-testid="attr1-card">{`Atributo 1: ${cardAttr1}`}</p>
        </div>

        <div>
          <p data-testid="attr2-card">{`Atributo 2: ${cardAttr2}`}</p>
        </div>

        <div>
          <p data-testid="attr3-card">{`Atributo 3: ${cardAttr3}`}</p>
        </div>

        <div>
          <p data-testid="rare-card">{`Raridade: ${cardRare}`}</p>
        </div>

        <div>{cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}</div>
        {deleteCard && (
          <button
            type="button"
            onClick={ deleteCard }
            data-testid="delete-button"
          >
            Excluir
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func,
};

Card.defaultProps = {
  deleteCard: null,
};

export default Card;
