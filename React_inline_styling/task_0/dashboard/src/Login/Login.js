import React from 'react';

function Login() {
  return (
    <section>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email: <input id="email" type="email" /></label>
        <label htmlFor="password">Password: <input id="password" type="password" /></label>
        <button type="submit">OK</button>
      </form>
    </section>
  );
}

export default Login;
