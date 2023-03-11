import './profile.css';
import ReservedMission from './reservedMissions';
import ReservedRocket from './reservedRockets';

const Profile = () => (
  <div className="reserved-lists">
    <ReservedMission />
    <ReservedRocket />
  </div>
);

export default Profile;
