import styles from './App.module.scss';
import EnterGame from './pages/EnterGame/EnterGame';
import AuthPage from './pages/auth/AuthPage';
import CreateGame from './pages/CreateGame/CreateGame';

function App() {
  return (
    <div className={styles.App}>
      <CreateGame/>
    </div>
  );
}

export default App;
