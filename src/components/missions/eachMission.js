import React from 'react';
import PropTypes from 'prop-types';

const EachMission = ({ mission }) => {
  const { missionId, missionName, description } = mission;

  return (
    <tr>
      <td className="td mission-title">
        <h1 className="mission-title">{missionName}</h1>
      </td>
      <td className="td">
        <p className="mission-description">{description}</p>
      </td>
      <td className="td">
        <span className="status-not-a-member">NOT A MEMBER</span>
      </td>
      <td className="td">
        <button className="join-mission-btn" type="button" id={missionId}>
          Join Mission
        </button>
      </td>
    </tr>
  );
};

EachMission.propTypes = {
  mission: PropTypes.shape({
    missionName: PropTypes.string,
    missionId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EachMission;
