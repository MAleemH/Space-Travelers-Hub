import React from 'react';
import { useSelector } from 'react-redux';
import '../missions/missions.css';

const ReservedMission = () => {
  const missionsInfo = useSelector((state) => state.missions.missionLists);

  const joinedMissionsList = missionsInfo.filter(
    (mission) => mission.joinedMission,
  );

  const joinedMissions = joinedMissionsList.map((mission) => (
    <tr key={mission.missionId} className="reservedM">
      <p className="listsM">
        {' '}
        {mission.missionName}
        {' '}
      </p>
    </tr>
  ));

  return (
    <div className="missions-section">
      <h1 className="profile-titles">My Missions</h1>
      <table className="missionList">
        {joinedMissionsList.length > 0 ? (
          joinedMissions
        ) : (
          <tr className="reservedM">
            <p className="no-items">No Missions Joined</p>
          </tr>
        )}
      </table>
    </div>
  );
};
export default ReservedMission;
