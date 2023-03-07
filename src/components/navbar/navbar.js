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
    <a href={links[0].path} className="nav-title">
      <img src={logo} width="50" height="50"  />
      <h1 className="web-title">Space Travelers' Hub</h1>
    </a>
    <ul className="nav-list">
      {links.map((link) => (
        <li className="nav-items" key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
