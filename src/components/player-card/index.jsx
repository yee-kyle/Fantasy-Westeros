import React from 'react';
import PropTypes from 'prop-types';
import character from '../../images/character.png';

const PlayerCard = ({
  id,
  firstName,
  lastName,
  rating,
  handedness,
}) => (
  <div className="playerCard" key={id}>
    <img src={character} alt="Avatar" />
    <div className="playerInfo">
      <h1>{firstName} {lastName}</h1>
      <h3>Rating: {rating}</h3>
      <h3>Handedness: {handedness}</h3>
      <div className="newPlayerButton">
        <a id="delete" className="delete" href="/roster">Delete Player</a>
      </div>
    </div>
  </div>
);

PlayerCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  handedness: PropTypes.string.isRequired,
};

export default PlayerCard;
