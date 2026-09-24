import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState((state) => ({
      email,
      enableSubmit: email !== '' && state.password !== '',
    }));
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState((state) => ({
      password,
      enableSubmit: state.email !== '' && password !== '',
    }));
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <section>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email: <input id="email" type="email" value={email} onChange={this.handleChangeEmail} /></label>
          <label htmlFor="password">Password: <input id="password" type="password" value={password} onChange={this.handleChangePassword} /></label>
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </section>
    );
  }
}

export default Login;
