import React from 'react';

export const text = {
  headline: 'Fantasy Westeros',
  description: 'Manage your house with characters from Game of Thrones',
};

const HomePage = () => (
  <main className="homepage">
    <h1 className="headline">{text.headline}</h1>
    <p className="description">{text.description}</p>
    <div className="signinOptions">
      <a className="registerButton" href="/register">Register</a>
      <a className="loginButton" href="/login">Login</a>
    </div>
  </main>
);

export { HomePage };
