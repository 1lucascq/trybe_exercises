import React, { Component } from 'react';
import Loading from './Loading';
import MusicCard from '../components/MusicCard';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      allFavSongs: [],
      favoritesLoading: false,
    };

    this.loadFavoriteSongs = this.loadFavoriteSongs.bind(this);
    this.updateFavSongs = this.updateFavSongs.bind(this);
  }

  async componentDidMount() {
    await this.loadFavoriteSongs();
  }

  async shouldComponentUpdate() {
    const updatedFavSongs = await getFavoriteSongs();
    const allFavSongs = this.state;

    if (updatedFavSongs.length !== allFavSongs.length) return true;
    return false;
  }

  async componentDidUpdate() {
    await this.updateFavSongs();
  }

  async updateFavSongs() {
    const allFavSongs = await getFavoriteSongs();
    this.setState({ allFavSongs });
  }

  async loadFavoriteSongs() {
    this.setState({ favoritesLoading: true });
    const allFavSongs = await getFavoriteSongs();

    this.setState(
      {
        favoritesLoading: false,
      },
      this.setState({ allFavSongs }),
    );
  }

  render() {
    const { favoritesLoading, allFavSongs } = this.state;

    if (favoritesLoading) return <Loading />;

    return (
      <>
        <Header />
        <div data-testid="page-favorites">

          <MusicCard data={ allFavSongs } />

        </div>
      </>
    );
  }
}
