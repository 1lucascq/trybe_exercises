import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section className="movie-list">
        { movies.map((e, i) => (
          <MovieCard movie={ e } key={ `Movie Title ${i + 1}` } />
        ))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
