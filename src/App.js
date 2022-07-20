import styles from './App.module.scss';
import EnterGame from './pages/EnterGame/EnterGame';
import AuthPage from './pages/auth/AuthPage';
import CreateGame from './pages/CreateGame/CreateGame';
import Lobby from './pages/Lobby/Lobby';
import HostGame from './pages/HostGame/HostGame';
import ListGame from './pages/ListGame/ListGame';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path="/" element={<EnterGame/>}/>
          <Route path="/login" element={<AuthPage type="login"/>}/>
          <Route path="/signup" element={<AuthPage type="signup"/>}/>
          <Route path="/dashboard" element={<ListGame/>}/>
        </Routes>
    </div>
  );
}

export default App;
