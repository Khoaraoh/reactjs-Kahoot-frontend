import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./EnterGame.module.scss";
import MyButton from "../../components/MyButton/MyButton";
import { socket } from "../../share/socket/socket";

function EnterGame() {
    const [gamePIN, setGamePIN] = useState("");
    const [playerName, setPlayerName] = useState("");

    function handleInputGamePIN(value) {
        setGamePIN(value);
    }

    function handleInputPlayerName(value) {
        setPlayerName(value);
    }

    const handleEnterGame = () => {
        const data = {
            room: gamePIN,
            name: playerName,
        };
        socket.emit("joinRoom", data);
        socket.on("joinRoomRes", (res) => {
            console.log("res", res);
        });
    };

    return (
        <div className={styles.enterGameContainer}>
            <div className={styles.header}>
                <MyButton text="Languague" size="medium" color="red" />
            </div>

            <div className={styles.content}>
                <img src="https://assets-cdn.kahoot.it/controller/v2/assets/icn_kahoot_logo.58b66a21.svg"></img>
                <form action="#">
                    <input
                        type="text"
                        placeholder="Game PIN"
                        value={gamePIN}
                        onChange={(e) => handleInputGamePIN(e.target.value)}
                    ></input>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={playerName}
                        onChange={(e) => handleInputPlayerName(e.target.value)}
                    ></input>
                    <div>
                        <MyButton
                            text="Enter"
                            size="medium"
                            color="black"
                            onClick={handleEnterGame}
                        />
                    </div>
                </form>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>Create your own Kahoot for FREE at &nbsp;</p>
                    <Link
                        to="/login"
                        style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                        <a>kahoot.com</a>
                    </Link>
                </div>
                <div className={styles.footerContent}>
                    <a>Terms</a>
                    <p>&nbsp; | &nbsp;</p>
                    <a>Privacy</a>
                </div>
            </div>
        </div>
    );
}

export default EnterGame;
