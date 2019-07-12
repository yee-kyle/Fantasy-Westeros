import React from 'react';

export class RosterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  fetchPlayers = () => {
    window
      .fetch('https://players-api.developer.alchemy.codes/api/players', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
      .then(res => res.json())
      .then(data => this.setState({ players: data.players }))
      .catch(err => console.error(err));
  }

  render() {
    this.playerList = this.state.players.map((player, key) => <li key={player.id}>{player.first_name}</li>);
    return (
      <main className="rosterPage">
        <h1>My Roster</h1>
        <ul>
          {this.playerList}
        </ul>
        <div className="newPlayerButton">
          <a className="registerButton" href="/player/new">Add New Player</a>
        </div>
      </main>
    )
  }
};
