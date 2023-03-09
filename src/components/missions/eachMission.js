import React from 'react';
import PropTypes from 'prop-types';
import JoinMissionBtn from './joinMissionBtn';
import './missions.css';

function EachMission({
  missionName, missionId, description, joinedMission,
}) {
  const statusClass = joinedMission ? 'active-member' : 'not-a-member';

  return (
    <tr>
      <td className="td mission-title">
        <h1 className="mission-title">{missionName}</h1>
      </td>
      <td className="td">
        <p className="mission-description">{description}</p>
      </td>
      <td className="td td-with-span">
        <span className={`${statusClass} status`}>
          {joinedMission ? 'Active Member' : 'NOT A MEMBER'}
        </span>
      </td>
      <td className="td button-td">
        <JoinMissionBtn missionId={missionId} joinedMission={joinedMission} />
      </td>
    </tr>
  );
}

EachMission.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joinedMission: PropTypes.bool.isRequired,
};

export default EachMission;
