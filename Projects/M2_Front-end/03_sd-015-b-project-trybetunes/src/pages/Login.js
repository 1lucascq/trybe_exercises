import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      disableLoginBtn: true,
      isLoading: false,
      redirect: false,
    };

    this.enableBtn = this.enableBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.savebtn = this.savebtn.bind(this);
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

  savebtn() {
    this.setState({ isLoading: true }, async () => {
      const { name } = this.state;
      await createUser({ name });
      this.setState({ isLoading: false, redirect: true });
    });
  }

  enableBtn() {
    const { name } = this.state;
    if (name.length > 2) return this.setState({ disableLoginBtn: false });
  }

  render() {
    const { redirect, isLoading, disableLoginBtn, name } = this.state;

    if (isLoading) return <Loading />;

    return (
      <section>
        <div data-testid="page-login">
          {redirect ? (
            <Redirect to="/search" />
          ) : (
            <div>
              <label htmlFor="name">
                <input
                  name="name"
                  value={ name }
                  onChange={ this.handleChange }
                  type="text"
                  data-testid="login-name-input"
                />
              </label>
              <button
                disabled={ disableLoginBtn }
                type="button"
                onClick={ this.savebtn }
                data-testid="login-submit-button"
              >
                Entrar
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }
}
