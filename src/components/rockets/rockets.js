import './rockets.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsData, reserveRocket, cancelReserve } from '../../redux/rockets/rocketsSlice';

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
            <p className="rocket-description">
              {rocket.reserved === true ? <span className="reserved">Reserved</span> : ''}
              {rocket.description}
            </p>
            { rocket.reserved === false
              ? (
                <button onClick={() => { dispatch(reserveRocket(rocket.id)); }} type="button" className="reservation-button">Reserve Rocket</button>
              )
              : (
                <button onClick={() => { dispatch(cancelReserve(rocket.id)); }} type="button" className="cancel-reservation-button">Cancel Reservation</button>
              )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Rockets;
