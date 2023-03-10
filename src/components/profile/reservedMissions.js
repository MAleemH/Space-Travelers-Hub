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
      {mission.missionName}
    </tr>
  ));

  return (
    <div className="missions-profile">
      <h1 className="missionProfileTitle">My Missions</h1>
      <table className="missionList">
        {joinedMissionsList.length > 0 ? (
          joinedMissions
        ) : (
          <tr>No Missions Joined</tr>
        )}
      </table>
    </div>
  );
};
export default ReservedMission;
