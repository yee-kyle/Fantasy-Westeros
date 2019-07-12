import React from 'react';

const RegisterPage = () => (
  <main className="registerPage">
    <form action="https://players-api.developer.alchemy.codes/api/user" method="post">
      <fieldset className="inputFields">
        <div className="registerField">
          <label className="registerLabel">First Name:</label>
          <input id="firstName" className="registerInput" alt="FirstName" name="firstName" type="text" />
        </div>
        <div className="registerField">
          <label className="registerLabel">Last Name:</label>
          <input id="lastName" className="registerInput" alt="LastName" name="lastName" type="text"/>
        </div>
        <div className="registerField">
          <label className="registerLabel">Email Address:</label>
          <input id="email" className="registerInput" alt="Email" name="email" type="email"/>
        </div>
        <div className="registerField">
          <label className="registerLabel">Password:</label>
          <input id="password" className="registerInput" alt="Password" name="password" type="password"/>
        </div>
        <div className="registerField">
          <label className="registerLabel">Confirm Password:</label>
          <input id="confirmPassword" className="registerInput" alt="passwordConfirm" name="confirmPassword" type="password"/>
        </div>
        <div className="registerField">
          <input id="register" className="registerButton" type="submit" value="Register"/>
        </div>
      </fieldset>
    </form>
  </main>
);

export { RegisterPage };
