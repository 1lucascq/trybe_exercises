import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      queryResult: '',
      disableQueryBtn: true,
      searchLoading: false,
    };

    this.enableBtn = this.enableBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchBtn = this.searchBtn.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => this.enableBtn(),
    );
  }

  async searchBtn() {
    const { query } = this.state;
    this.setState({ queryPrevInput: query, query: '', searchLoading: true });

    const queryResult = await searchAlbumsAPI(query);
    this.setState({ queryResult, searchLoading: false });
  }

  enableBtn() {
    const { query } = this.state;
    if (query.length > 1) return this.setState({ disableQueryBtn: false });
  }

  renderResults(queryResult) {
    if (queryResult.length === 0) {
      return <p>Nenhum álbum foi encontrado</p>;
    }
    return queryResult.map((album) => {
      const {
        // artistId,
        artistName,
        collectionId,
        collectionName,
        // collectionPrice,
        artworkUrl100,
        // releaseDate,
        // trackCount,
      } = album;
      // console.log(artworkUrl100);
      return (
        <Link
          to={ `/album/${collectionId}` }
          key={ collectionId }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <div className="result-card-div">
            <img src={ artworkUrl100 } alt={ `${collectionName} cover` } />
            <span>{artistName}</span>
            <span> - </span>

            <span>{collectionName}</span>
          </div>
        </Link>
      );
    });
  }

  render() {
    const {
      query,
      queryPrevInput,
      disableQueryBtn,
      queryResult,
      searchLoading,
    } = this.state;

    if (searchLoading) return <Loading />;

    return (
      <>
        <Header />
        <div className="search-div" data-testid="page-search">
          <div>
            <label htmlFor="query">
              <input
                name="query"
                value={ query }
                onChange={ this.handleChange }
                type="text"
                data-testid="search-artist-input"
              />
            </label>
            <button
              disabled={ disableQueryBtn }
              type="button"
              onClick={ this.searchBtn }
              data-testid="search-artist-button"
            >
              Pesquisar
            </button>

            <div className="search-result-div">
              {queryResult.length > 0 && (
                <p>{`Resultado de álbuns de: ${queryPrevInput}`}</p>
              )}
              {queryResult && this.renderResults(queryResult)}
            </div>
          </div>
        </div>
      </>

    );
  }
}
