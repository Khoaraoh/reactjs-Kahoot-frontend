import styles from './App.module.scss';
import EnterGame from './pages/EnterGame/EnterGame';
import AuthPage from './pages/auth/AuthPage';

function App() {
  return (
    <div className={styles.App}>
      <AuthPage/>
    </div>
  );
}

export default App;
