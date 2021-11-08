import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Header from '../components/Header';

export default class Album extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };

    this.addDataToSetState = this.addDataToSetState.bind(this);
    this.getAlbum = this.getAlbum.bind(this);
    this.getArtist = this.getArtist.bind(this);
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const data = await getMusics(id);
    this.addDataToSetState(data);
  }

  getArtist(data) {
    if (data.length > 0) return data[0].artistName;
  }

  getAlbum(data) {
    if (data.length > 0) return data[0].collectionName;
  }

  addDataToSetState(data) {
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const artist = this.getArtist(data);
    const album = this.getAlbum(data);

    return (
      <>
        <Header />
        <div data-testid="page-album">
          <div className="album-card">
            <h4 data-testid="album-name">{album}</h4>
            <h5 data-testid="artist-name">{artist}</h5>
          </div>
          <MusicCard data={ data } />
        </div>
      </>
    );
  }
}

Album.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.string.isRequired,
};
