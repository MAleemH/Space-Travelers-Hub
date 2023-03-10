import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRocket = () => {
  const rockets = useSelector((state) => state.rockets.rocketsLists);

  const reservedRocket = rockets.filter((rocket) => rocket.reserved);

  const list = reservedRocket.map((rocket) => (
    <tr key={rocket.id} className="rockets-list-items">
      <p className="rocket-name">{rocket.rocket_name}</p>
    </tr>
  ));

  return (
    <div className="rockets-section">
      <p className="profile-titles">My Rockets</p>
      <table className="rockets-list">
        {reservedRocket.length > 0 ? (
          list
        ) : (
          <tr className="rockets-list-items">
            <p className="no-items">No Rockets Reserved</p>
          </tr>
        )}
      </table>
    </div>
  );
};

export default ReservedRocket;
