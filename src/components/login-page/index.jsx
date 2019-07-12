import React from 'react';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    window
      .fetch('https://players-api.developer.alchemy.codes/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      })
      .then(res => {
        console.log(res);
        if ( res.status === 200 ) {
          window.location.href = 'http://localhost:3000/roster';
        }
        res.json()
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <main className="loginPage">
        <form onSubmit={this.handleSubmit}>
          <fieldset className="inputFields">
            <div className="registerField">
              <label className="registerLabel">Email Address:</label>
              <input id="email" className="registerInput" alt="Email" name="email" type="email"/>
            </div>
            <div className="registerField">
              <label className="registerLabel">Password:</label>
              <input id="password" className="registerInput" alt="Password" name="password" type="password"/>
            </div>
            <div className="registerField">
              <input id="login" className="registerButton" type="submit" value="Login"/>
            </div>
          </fieldset>
        </form>
      </main>
    )
  }
};
