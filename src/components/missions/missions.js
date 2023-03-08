// /* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsData } from '../../redux/missions/missionsSlice';
import EachMission from './eachMission';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();

  const missionsInfo = useSelector((state) => state.missions.missionLists);

  useEffect(() => {
    dispatch(getMissionsData());
  }, [dispatch]);

  const missionsList = missionsInfo.map(
    ({ mission_id: missionId, mission_name: missionName, description }) => (
      <EachMission
        key={missionId}
        missionName={missionName}
        description={description}
      />
    ),
  );

  return (
    <div className="container">
      <table className="table-container">
        <thead id="thead">
          <tr>
            <th className="th">Missions</th>
            <th className="th">Description</th>
            <th className="th">status</th>
            <th className="th"> </th>
          </tr>
        </thead>
        <tbody>{missionsList}</tbody>
      </table>
    </div>
  );
};

export default Missions;
