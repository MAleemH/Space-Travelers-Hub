import './rockets.css';
import Rocket from './rocket.jpg';

const Rockets = () => (
  <div className="rockets-container">
    <img src={Rocket} className="rocket-image" alt="Rocket" />
    <div className="rocket-data">
      <p className="rocket-title">Falcon 1</p>
      <p className="rocket-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id orci eu ex malesuada tincidunt ac et dolor. Nunc vel dolor porta, semper felis ut, convallis nibh.</p>
      <button type="button" className="reservation-button">Reserve Rocket</button>
    </div>
  </div>
);

export default Rockets;
