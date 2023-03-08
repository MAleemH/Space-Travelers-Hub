import './rockets.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsData } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const rocketsData = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  return (
    <>
      {rocketsData.map((rocket) => (
        <div className="rockets-container" key={rocket.id}>
          <img src={rocket.flickr_images} className="rocket-image" alt={rocket.id} />
          <div className="rocket-data">
            <p className="rocket-title">{rocket.rocket_name}</p>
            <p className="rocket-description">{rocket.description}</p>
            <button type="button" className="reservation-button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Rockets;
