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
    if (missionsInfo.length === 0) dispatch(getMissionsData());
  }, [dispatch, missionsInfo.length]);

  return (
    <div className="container">
      <table className="table-container">
        <thead id="thead">
          <tr>
            <th className="th missionSize">Missions</th>
            <th className="th descrSize">Description</th>
            <th className="th statusSize">status</th>
            <th className="th empty"> </th>
          </tr>
        </thead>
        <tbody>
          {missionsInfo.map((missions) => (
            <EachMission
              key={missions.missionId}
              missionId={missions.missionId}
              missionName={missions.missionName}
              description={missions.description}
              joinedMission={missions.joinedMission}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
