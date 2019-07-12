import React from 'react';
import PlayerCard from '../player-card';

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
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(data => this.setState({ players: data.players }))
      .catch(err => console.error(err));
  }

  render() {
    const playerList = this.state.players.map((player) => {
      return <PlayerCard
        id={player.id}
        firstName={player.first_name}
        lastName={player.last_name}
        rating={player.rating}
        handedness={player.handedness}
      />
    });
    return (
      <main className="rosterPage">
        <h1>My Roster</h1>
        <div className="players">
          {playerList}
        </div>
        <div className="newPlayerButton">
          <a className="registerButton" href="/player/new">Add New Player</a>
        </div>
      </main>
    )
  }
};
