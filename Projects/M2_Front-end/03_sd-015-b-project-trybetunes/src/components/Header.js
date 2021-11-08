import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      headerLoading: true,
      recoveredName: '',
    };

    this.loaded = this.loaded.bind(this);
    this.gettingUser = this.gettingUser.bind(this);
    this.saveName = this.saveName.bind(this);
  }

  async componentDidMount() {
    const name = await this.gettingUser();
    this.saveName(name);
  }

  async gettingUser() {
    const resp = await getUser();
    this.loaded();
    return resp;
  }

  saveName(name) {
    this.setState({ recoveredName: name });
  }

  loaded() {
    this.setState({ headerLoading: false });
  }

  render() {
    const { headerLoading, recoveredName } = this.state;

    if (headerLoading) return <Loading />;

    return (
      <header data-testid="header-component">
        <p className="username" data-testid="header-user-name">
          {recoveredName.name}
        </p>

        <div className="links-wrapper">
          <Link
            className="header-link"
            to="/search"
            data-testid="link-to-search"
          >
            Search
          </Link>
          <span>{' - '}</span>
          <Link
            className="header-link"
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favorites
          </Link>
          <span>{' - '}</span>
          <Link
            className="header-link"
            to="/profile"
            data-testid="link-to-profile"
          >
            Profile
          </Link>
        </div>
      </header>
    );
  }
}
