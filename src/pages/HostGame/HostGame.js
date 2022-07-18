import {RiAddBoxFill} from "react-icons/ri";
import {BsFillDiamondFill, BsFillCircleFill, BsFillTriangleFill, BsFillSquareFill} from "react-icons/bs";

import MyButton from "../../components/MyButton/MyButton";
import styles from "./HostGame.module.scss";

function HostGame()
{
    return (
        <div className={styles.hostgameContainer}>
            <div className={styles.questionItem}>
                <div className={styles.questionTitle}>
                    <div className={styles.blank}></div>
                    <input type="text" value="Question 1wjkdnqwf qkjfnkqnfkqqjndjkqndkjqndkjqndkn"></input>
                    <MyButton
                        text="Skip"
                        size="medium"
                        color="blue"
                    />
                </div>
            
                <div className={styles.mediaContainer}>
                    <div className={styles.timer}>
                        <span>237</span>
                    </div>
                    <div className={styles.media}>
                        <RiAddBoxFill/>
                        <p>Insert media</p>
                    </div>
                    <div className={styles.playerCounter}>
                        <span>12</span>
                        <label>Answers</label>
                    </div>
                </div>

                <div className={styles.answerContainer}>
                    <div className={styles.answerLine}>
                        <div className={`${styles.answerBox} ${styles.red}`}>
                            <div className={styles.icon}>
                                <BsFillTriangleFill/>
                            </div>
                            <input type="text" value="Answer 1"></input>
                        </div>
                        <div className={`${styles.answerBox} ${styles.blue}`}>
                            <div className={styles.icon}>
                                <BsFillDiamondFill/>
                            </div>
                            <input type="text" value="Answer 2"></input>
                        </div>
                    </div>
                    
                    <div className={styles.answerLine}>
                        <div className={`${styles.answerBox} ${styles.yellow}`}>
                            <div className={styles.icon}>
                                <BsFillCircleFill/>
                            </div>
                                <input type="text" value="Answer 3"></input>
                            </div>

                            <div className={`${styles.answerBox} ${styles.green}`}>
                                <div className={styles.icon}>
                                    <BsFillSquareFill/>
                                </div>
                                <input type="text" value="Answer 4"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <span>3/4</span>
                    <span>Game PIN: 8956234</span>   
                </div>
        </div>
    )
}

export default HostGame;