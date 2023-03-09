import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missionsSlice';
import './missions.css';

const JoinMissionBtn = ({ joinedMission, missionId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(joinMission(missionId));
  };

  const missionStatusClass = joinedMission
    ? 'leave-mission-btn'
    : 'join-mission-btn';

  return (
    <button
      className={`${missionStatusClass}`}
      type="button"
      onClick={handleClick}
    >
      {joinedMission ? 'Leave Mission' : 'Join Mission'}
    </button>
  );
};

JoinMissionBtn.propTypes = {
  joinedMission: PropTypes.bool.isRequired,
  missionId: PropTypes.string.isRequired,
};

export default JoinMissionBtn;
