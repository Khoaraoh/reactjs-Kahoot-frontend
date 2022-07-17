import styles from './App.module.scss';
import EnterGame from './pages/EnterGame/EnterGame';
import AuthPage from './pages/auth/AuthPage';
import CreateGame from './pages/CreateGame/CreateGame';
import Lobby from './pages/Lobby/Lobby';
import HostGame from './pages/HostGame/HostGame';

function App() {
  return (
    <div className={styles.App}>
      <HostGame/>
    </div>
  );
}

export default App;
