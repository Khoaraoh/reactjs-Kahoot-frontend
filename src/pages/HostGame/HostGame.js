import {RiAddBoxFill} from "react-icons/ri";

import styles from "./HostGame.module.scss";

function HostGame()
{
    return (
        <div className={styles.hostgameContainer}>
            <div className={styles.questionItem}>
                <div className={styles.questionTitle}>
                    <input type="text" placeholder="Start typing your question" value=""></input>
                </div>

                <div className={styles.mediaContainer}>
                    <div className={styles.media}>
                        <RiAddBoxFill/>
                        <p>Insert media</p>
                    </div>
                </div>

                <div className={styles.answerContainer}>
                    <div className={styles.answerLine}>
                        <div className={styles.answerBox}>
                            <div className={styles.redRectangle}></div>
                            <input type="text" placeholder="Add answer 1" value=""></input>
                        </div>
                        <div className={styles.answerBox}>
                            <div className={styles.blueRectangle}></div>
                            <input type="text" placeholder="Add answer 2" value=""></input>
                        </div>
                    </div>
                    
                    <div className={styles.answerLine}>
                        <div className={styles.answerBox}>
                            <div className={styles.yellowRectangle}></div>
                                <input type="text" placeholder="Add answer 3" value=""></input>
                            </div>

                            <div className={styles.answerBox}>
                                <div className={styles.greenRectangle}></div>
                                <input type="text" placeholder="Add answer 4" value=""></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    
                </div>
        </div>
    )
}

export default HostGame;