import styles from "./App.module.scss";
import EnterGame from "./pages/EnterGame/EnterGame";
import AuthPage from "./pages/auth/AuthPage";
import CreateGame from "./pages/CreateGame/CreateGame";
import Lobby from "./pages/Lobby/Lobby";
import HostGame from "./pages/HostGame/HostGame";
import ListGame from "./pages/ListGame/ListGame";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div className={styles.App}>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Routes>
                <Route path="/" element={<EnterGame />} />
                <Route path="/login" element={<AuthPage type="login" />} />
                <Route path="/signup" element={<AuthPage type="signup" />} />
                <Route path="/dashboard" element={<ListGame />} />
                <Route path="/host" element={<HostGame />} />
                <Route path="/lobby" element={<Lobby />} />
                <Route path="/create" element={<CreateGame />} />
            </Routes>
        </div>
    );
}

export default App;
