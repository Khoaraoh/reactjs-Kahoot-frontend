import styles from "./Lobby.module.scss";
import {FaUser} from "react-icons/fa";
import MyButton from "../../components/MyButton/MyButton";
import PlayerNameCard from "../../components/PlayerNameCard/PlayerNameCard";

const playerNum = 3;
const playerList = ["Khoa", "Tài", "Nam", "Lộc", "Long", "Anh", "An", "Bình", "BDiuqwfjqfq", "KillerQueen", "Hacker nhi đồng",
"Khoa", "Tài", "Nam", "Lộc", "Long", "Anh", "An", "Bình", "BDiuqwfjqfq", "KillerQueen", "Hacker nhi đồng", "Hacker nhi đồng",
"Khoa", "Tài", "Nam", "Lộc", "Long", "Anh", "An", "Bình", "BDiuqwfjqfq", "KillerQueen", "Hacker nhi đồng", "Hacker nhi đồng",
"Khoa", "Tài", "Nam", "Lộc", "Long", "Anh", "An", "Bình", "BDiuqwfjqfq", "KillerQueen", "Hacker nhi đồng"]

function Lobby()
{
    return(
        <div className={styles.lobbyContainer}>
            <div className={styles.header}>
                <div className={styles.gamePin}>
                    <p>Game PIN:</p>
                    <h1>3658914</h1>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.controller}>
                    <div className={styles.playerNumber}>
                        <FaUser/>
                        <label>{playerNum}</label>
                    </div>
                    <h2>Player List</h2>
                    <div className={styles.startButton}>
                        <MyButton
                            text="Start"
                            size="medium"
                            color="white"
                        />
                    </div>
                </div>
                <div className={styles.playerList}>
                    {playerList.map(item => (
                        <div className={styles.playerCard}>
                           <PlayerNameCard name={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Lobby;