import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../pages/Loading';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      allFavSongs: [],
      musicCardLoading: false,
    };

    this.favoriteSong = this.favoriteSong.bind(this);
    this.loadFavoriteSongs = this.loadFavoriteSongs.bind(this);
  }

  async componentDidMount() {
    await this.loadFavoriteSongs();
  }

  async favoriteSong({ target }) {
    this.setState({ musicCardLoading: true });
    const { id } = target;
    const { data } = this.props;
    const favoriteSong = data.find((song) => song.trackId === parseInt(id, 10));
    const { trackId } = favoriteSong;
    const allFavSongs = await getFavoriteSongs();

    if (!allFavSongs) {
      await addSong(favoriteSong);
    }
    if (allFavSongs && allFavSongs.find((track) => track.trackId === trackId)) {
      await removeSong(favoriteSong);
    } else {
      await addSong(favoriteSong);
    }

    const updatedFavSongs = await getFavoriteSongs();

    this.setState({
      musicCardLoading: false,
    }, this.setState({ allFavSongs: [...updatedFavSongs] }));
  }

  async loadFavoriteSongs() {
    this.setState({ musicCardLoading: true });
    const allFavSongs = await getFavoriteSongs();

    this.setState({
      musicCardLoading: false,
    }, this.setState({ allFavSongs }));
  }

  render() {
    const { data } = this.props;
    const { musicCardLoading, allFavSongs } = this.state;

    if (musicCardLoading) return <Loading />;

    return (
      <div className="tracks-card">
        {data.map((track) => {
          const {
            artworkUrl60,
            collectionName,
            trackName,
            previewUrl,
            trackId,
          } = track;

          if (!previewUrl) return false;

          return (
            <>
              <div>
                <span>{trackName}</span>
              </div>
              <img src={ artworkUrl60 } alt={ collectionName } />
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
                .
              </audio>
              <label htmlFor={ trackId }>
                Favorita
                <input
                  name="favoriteCheckbox"
                  id={ trackId }
                  onChange={ this.favoriteSong }
                  checked={ allFavSongs.find(
                    (thisTrack) => thisTrack.trackId === trackId,
                  ) }
                  type="checkbox"
                  data-testid={ `checkbox-music-${trackId}` }
                />
              </label>
            </>
          );
        })}
      </div>
    );
  }
}

MusicCard.propTypes = {
  data: PropTypes.string.isRequired,
};
