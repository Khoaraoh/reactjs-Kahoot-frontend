import styles from './App.module.scss';
import MyButton from './components/global/MyButton/MyButton';
import EnterGame from './pages/EnterGame/EnterGame';

function App() {
  return (
    <div className={styles.App}>
      <EnterGame/>
    </div>
  );
}

export default App;
