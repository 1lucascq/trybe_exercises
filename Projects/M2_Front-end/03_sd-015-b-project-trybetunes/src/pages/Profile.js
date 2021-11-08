import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {},
      profileLoading: false,
    };
  }

  async componentDidMount() {
    await this.getUserInfo();
  }

  async getUserInfo() {
    this.setState({ profileLoading: true });
    const userInfo = await getUser();

    this.setState(
      {
        profileLoading: false,
      },
      this.setState({ userInfo }),
    );
  }

  render() {
    const { profileLoading, userInfo } = this.state;
    const { name, email, image, description } = userInfo;

    return (
      <>
        <Header />
        {profileLoading ? (
          <Loading />
        ) : (
          <div data-testid="page-profile">
            <h4>{name}</h4>
            <h5>{email}</h5>
            <p>{description}</p>
            <img src={ image } alt={ name } data-testid="profile-image" />
            <Link to="/profile/edit">Editar perfil</Link>
          </div>
        )}
      </>
    );
  }
}
