import {FaUser} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import styles from "./Lobby.module.scss";
import MyButton from "../../components/MyButton/MyButton";
import PlayerNameCard from "../../components/PlayerNameCard/PlayerNameCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { socket } from "../../share/socket/socket";

function Lobby() {
    const currentGame = useSelector((state) => state.game.currentGame);
    const [listPlayers, setListPlayers] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        socket.emit("fetchPlayersInRoom");
        socket.on("receive__players", (playerInRoom) => {
            setListPlayers(playerInRoom);
        });
        socket.emit("getQuiz", currentGame?.gameData?._id)
        socket.on("getQuizResult", data => {
        })
    }, [socket]);

    const handleStartGame = () => {
      socket.emit("startGame");
      navigate('/host/game')
    }
    return (
        <div className={styles.lobbyContainer}>
            <div className={styles.header}>
                <div className={styles.gamePin}>
                    <p>Game PIN:</p>
                    <h1>{!!currentGame ? currentGame.room : "000000"}</h1>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.controller}>
                    <div className={styles.playerNumber}>
                        <FaUser />
                        <label>
                            {!!listPlayers
                                ? listPlayers.length
                                : currentGame.listPlayers.length}
                        </label>
                    </div>
                    <h2>Player List</h2>
                    <div className={styles.startButton}>
                        <MyButton
                            text="Start"
                            size="medium"
                            color="white"
                            onClick={handleStartGame}
                        />
                    </div>
                </div>
                <div className={styles.playerList}>
                    {!!listPlayers
                        ? listPlayers.map((item) => (
                              <div className={styles.playerCard}>
                                  <PlayerNameCard name={item.name} />
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
}

export default Lobby;
