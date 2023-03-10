import React from 'react';
import { useSelector } from 'react-redux';
import '../missions/missions.css';

const ReservedMission = () => {
  const missionsInfo = useSelector((state) => state.missions.missionLists);

  const joinedMissionsList = missionsInfo.filter(
    (mission) => mission.joinedMission,
  );

  const joinedMissions = joinedMissionsList.map((mission) => (
    <li key={mission.missionId} className="reservedM">
      {mission.missionName}
    </li>
  ));

  return (
    <div className="missions-profile">
      <h1 className="missionProfileTitle">My Missions</h1>
      <ul className="missionList">
        {joinedMissionsList.length > 0 ? (
          joinedMissions
        ) : (
          <li>No Missions Joined</li>
        )}
      </ul>
    </div>
  );
};
export default ReservedMission;
