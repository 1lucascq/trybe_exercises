import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading';

export default class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: '',
        email: '',
        image: '',
        description: '',
      },
      profileEditLoading: false,
      disableEditBtn: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableBtn = this.enableBtn.bind(this);
    this.editBtn = this.editBtn.bind(this);
  }

  async componentDidMount() {
    await this.getUserInfo();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      (prevState) => ({
        userInfo: {
          ...prevState.userInfo,
          [name]: value,
        },
      }),
      () => this.enableBtn(),
    );
  }

  async getUserInfo() {
    this.setState({ profileEditLoading: true });
    const userInfo = await getUser();

    this.setState(
      {
        profileEditLoading: false,
        userInfo,
      },
      () => this.enableBtn(),
    );
  }

  async enableBtn() {
    const { userInfo } = this.state;
    const { name, email, image, description } = userInfo;

    if (name && email && image && description) {
      return this.setState({ disableEditBtn: false });
    }
  }

  editBtn() {
    const { userInfo } = this.state;
    const { history } = this.props;
    updateUser(userInfo);

    history.push('/profile');
  }

  render() {
    const { profileEditLoading, userInfo, disableEditBtn } = this.state;

    const { name, email, image, description } = userInfo;

    return (
      <>
        <Header />
        <section>
          {profileEditLoading ? (
            <Loading />
          ) : (
            <div data-testid="page-profile-edit">
              <form>
                <label htmlFor="name">
                  <input
                    name="name"
                    value={ name }
                    onChange={ this.handleChange }
                    type="text"
                    data-testid="edit-input-name"
                  />
                </label>

                <label htmlFor="email">
                  <input
                    name="email"
                    value={ email }
                    onChange={ this.handleChange }
                    type="email"
                    data-testid="edit-input-email"
                  />
                </label>

                <label htmlFor="description">
                  <input
                    name="description"
                    value={ description }
                    onChange={ this.handleChange }
                    type="text"
                    data-testid="edit-input-description"
                  />
                </label>

                <label htmlFor="image">
                  <input
                    name="image"
                    value={ image }
                    onChange={ this.handleChange }
                    type="text"
                    data-testid="edit-input-image"
                  />
                </label>

                <button
                  disabled={ disableEditBtn }
                  type="button"
                  onClick={ this.editBtn }
                  data-testid="edit-button-save"
                >
                  Editar perfil
                </button>
              </form>
            </div>
          )}
        </section>
      </>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
