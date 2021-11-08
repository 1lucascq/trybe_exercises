import React from 'react';
import Card from './components/Card';
import Filters from './components/Filters';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      allCards: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      filterName: '',
      filterRare: '',
      filterTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validateAttr = this.validateAttr.bind(this);
    this.validateGenericFields = this.validateGenericFields.bind(this);
    this.configureBtn = this.configureBtn.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.filterCards = this.filterCards.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onSaveButtonClick = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState((prevState) => ({
      allCards: [
        {
          cardName: cardName.value,
          cardDescription: cardDescription.value,
          cardAttr1: cardAttr1.value,
          cardAttr2: cardAttr2.value,
          cardAttr3: cardAttr3.value,
          cardImage: cardImage.value,
          cardRare: cardRare.value,
          cardTrunfo,
        },
        ...prevState.allCards,
      ],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
    });
  };

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => this.configureBtn(),
    );
  }

  onFilterChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.filterCards();
      },
    );
  }

  validateAttr() {
    const maxPoints = 210;
    const maxAttr = 90;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) return false;
    if (cardAttr1 > maxAttr || cardAttr2 > maxAttr || cardAttr3 > maxAttr) {
      return false;
    }

    const remainingPoints = maxPoints - cardAttr1 - cardAttr2 - cardAttr3;
    if (remainingPoints < 0) return false;
    if (cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0) return true;
  }

  validateGenericFields() {
    const { cardName, cardImage, cardDescription } = this.state;
    if (cardImage && cardName && cardDescription) return true;
    return false;
  }

  configureBtn() {
    const attr = this.validateAttr();
    const fields = this.validateGenericFields();

    if (attr && fields) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }

    if (!attr || !fields) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  deleteCard(i) {
    const { allCards } = this.state;
    const deleteThisCard = allCards[i];

    this.setState({
      hasTrunfo: !deleteThisCard.cardTrunfo,
      allCards: [],
    });
  }

  filterCards() {
    const { allCards, filterName, filterRare, filterTrunfo } = this.state;
    const filteredFilterRare = filterRare === 'todas' ? '' : filterRare;

    if (filterName && filteredFilterRare) {
      const filterByNameAndRare = allCards
        .filter((e) => e.cardName.includes(filterName))
        .filter((card) => card.cardRare === filteredFilterRare);
      this.setState({
        allCards: filterByNameAndRare,
      });
    }

    if (filterName && !filteredFilterRare) {
      const filterByName = allCards.filter((card) => card.cardName.includes(filterName));

      this.setState({
        allCards: filterByName,
      });
    }

    if (!filterName && filteredFilterRare) {
      const filterByRare = allCards.filter(
        (card) => card.cardRare === filterRare,
      );

      this.setState({
        allCards: filterByRare,
      });
    }

    if (filterTrunfo) {
      const filterByTrunfo = allCards.filter((card) => card.cardTrunfo);

      this.setState({
        allCards: filterByTrunfo,
      });
    }
  }

  render() {
    const { allCards, filterName, filterRare, filterTrunfo } = this.state;
    return (
      <main>
        <section className="form-and-card-container">
          <section className="form-section">
            <Form
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              { ...this.state }
            />
          </section>

          <section className="card-section">
            <Card { ...this.state } />
          </section>
        </section>

        <section className="filters-section">
          <Filters
            filterName={ filterName }
            filterTrunfo={ filterTrunfo }
            filterRare={ filterRare }
            onFilterChange={ this.onFilterChange }
            filterCards={ this.filterCards }
          />
        </section>

        <section className="all-cards-section">
          {allCards
            && allCards.map((e, i) => (
              <Card
                key={ i }
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
                deleteCard={ () => this.deleteCard(i) }
              />
            ))}
        </section>
      </main>
    );
  }
}
export default App;
