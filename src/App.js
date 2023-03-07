import './App.css';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/rockets/rockets';
import Missions from './components/missions/missions';
import Profile from './components/profile/profile';
import NotMatch from './components/notMatch';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
