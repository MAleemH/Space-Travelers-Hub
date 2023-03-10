import ReservedMission from './reservedMissions';
import ReservedRocket from './reservedRockets';
import '../missions/missions.css';

const Profile = () => (
  <div className="profileLists">
    <ReservedMission />
    <ReservedRocket />
  </div>
);

export default Profile;
