import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({ margin: { margin: '2rem' } });

function Login() {
  return <section className={css(styles.margin)}><p>Login to access the full dashboard</p><form><label htmlFor="email">Email: <input id="email" type="email" /></label><label htmlFor="password">Password: <input id="password" type="password" /></label><button type="submit">OK</button></form></section>;
}

export default Login;
