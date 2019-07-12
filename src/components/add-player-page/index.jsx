import React from 'react';

export class AddPlayerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    window
      .fetch('https://players-api.developer.alchemy.codes/api/players', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          first_name: firstName.value,
          last_name: lastName.value,
          rating: rating.value,
          handedness: handedness.value,
        }),
      })
      .then(res => {
        if ( res.status === 200 ) {
          window.location.href = 'http://localhost:3000/roster';
        }
        res.json()
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <main className="addPlayerPage">
        <form onSubmit={this.handleSubmit}>
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
              <label className="registerLabel">Rating:</label>
              <input id="rating" className="registerInput" alt="Rating" name="rating" type="number"/>
            </div>
            <div className="registerField">
              <label className="registerLabel">Handedness:</label>
              <select id="handedness">
                <option value="Left">Left</option>
                <option value="Right">Right</option>
              </select>
            </div>
            <div className="registerField">
              <input id="create" className="registerButton" type="submit" value="Create Player"/>
            </div>
          </fieldset>
        </form>
      </main>
    )
  }
};
