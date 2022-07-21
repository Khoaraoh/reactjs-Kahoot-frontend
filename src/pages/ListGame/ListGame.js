import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import MyButton from "../../components/MyButton/MyButton";
import styles from "./ListGame.module.scss";
import { RiKeyboardBoxLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { socket } from "../../share/socket/socket";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCurrentGame } from "../../share/redux/reducers/game.reducers";

function ListGame() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [gameList, setGameList] = useState([]);
    useEffect(() => {
        socket.emit("fetchQuizList", socket.id);
        socket.on("fetchQuizListRes", (data) => {
            setGameList(data);
        });
    }, []);

    const handleCreateButton = () => {
        navigate("/create");
    };

    const hostGame = (gameId) => {
        socket.emit("hostGame", gameId);
        socket.on("hostGameRes", (res) => {
            dispatch(updateCurrentGame(res?.game));
            navigate("/lobby");
        });
    };
    return (
        <div className={styles.listGameContainer}>
            <div className={styles.header}>
                <span>Welcome, Guest</span>

                <div className={styles.account}>
                    <FaUser />
                </div>
                <Link
                    to="/create"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                >
                    <MyButton
                        color="blue"
                        text="Create"
                        size="medium"
                        onClick={handleCreateButton}
                    />
                </Link>
            </div>

            <div className={styles.body}>
                {!!gameList
                    ? gameList.map((gameItem) => (
                          <div className={styles.gameCard}>
                              <div className={styles.left}>
                                  <RiKeyboardBoxLine />
                                  <span>{gameItem.name}</span>
                              </div>
                              <div className={styles.right}>
                                  <MyButton
                                      color="red"
                                      size="small"
                                      text="Delete"
                                  />
                                  <MyButton
                                      color="green"
                                      size="small"
                                      text="Update"
                                  />
                                  <MyButton
                                      color="blue"
                                      size="small"
                                      text="Host"
                                      onClick={() => hostGame(gameItem._id)}
                                  />
                              </div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
}

export default ListGame;
