import styles from './App.module.scss';
import EnterGame from './pages/EnterGame/EnterGame';
import AuthPage from './pages/auth/AuthPage';
import CreateGame from './pages/CreateGame/CreateGame';
import Lobby from './pages/Lobby/Lobby';

function App() {
  return (
    <div className={styles.App}>
      <Lobby/>
    </div>
  );
}

export default App;
