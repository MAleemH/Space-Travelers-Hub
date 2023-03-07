/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'Profile' },
];

const Navbar = () => (
  <nav>
    <div>
        <a href="">
          <img src={logo} width="50" height="50"  />
        </a>
        <h1 className="web-title">Space Travelers' Hub</h1>
    </div>
    <ul className="nav-items">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
