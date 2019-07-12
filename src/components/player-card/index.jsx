import React from 'react';
import character from '../../images/character.png';

const PlayerCard = ({id, first_name, last_name, rating, handedness}) => (
  <div className="playerCard" key={id}>
    <img src={character} alt="Avatar" />
      <div className="playerInfo">
        <h1>{first_name} {last_name}</h1>
        <h3>Rating: {rating}</h3>
        <h3>Handedness: {handedness}</h3>
        <div className="newPlayerButton">
          <a className="loginButton" href="">Delete Player</a>
        </div>
      </div>
  </div>
);

export { PlayerCard };
