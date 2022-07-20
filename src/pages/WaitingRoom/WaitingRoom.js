

import styles from './WaitingRoom.module.scss';

//Fake data
const playerName = "Đăng Khoa";

function WaitingRoom()
{
    return (
        <div className={styles.roomContainer}>
            <div className={styles.body}>
                <h1>You're in!</h1>
                <span>See your nickname in screen?</span>
            </div>

            <div className={styles.footer}>
                <span>{playerName}</span>
            </div>
        </div>
    )
}

export default WaitingRoom;