import {RiAddBoxFill} from "react-icons/ri";
import {BsFillDiamondFill, BsFillCircleFill, BsFillTriangleFill, BsFillSquareFill} from "react-icons/bs";

import MyButton from "../../components/MyButton/MyButton";
import styles from "./HostGame.module.scss";
import BarChart from "../../components/BarChart/BarChart";

//Change state to change view (question, answer, scoreboard). Fake data
const state = "answer";

function HostGame()
{
    return (
        <div>
        {/* Question state */}
        {
            state==='question'&&
            <div className={styles.hostgameContainer}>
            <div className={styles.questionItem}>
                <div className={styles.questionTitle}>
                    <div className={styles.blank}></div>
                    <input type="text" value="Who is the best?"></input>
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
                            <span>Answer 1</span>
                        </div>
                        <div className={`${styles.answerBox} ${styles.blue}`}>
                            <div className={styles.icon}>
                                <BsFillDiamondFill/>
                            </div>
                            <span>Answer 2</span>
                        </div>
                    </div>
                    
                    <div className={styles.answerLine}>
                        <div className={`${styles.answerBox} ${styles.yellow}`}>
                            <div className={styles.icon}>
                                <BsFillCircleFill/>
                            </div>
                                <span>Answer 3</span>
                            </div>

                            <div className={`${styles.answerBox} ${styles.green}`}>
                                <div className={styles.icon}>
                                    <BsFillSquareFill/>
                                </div>
                                <span>Answer 4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <span>3/4</span>
                    <span>Game PIN: 8956234</span>   
                </div>
        </div>
        }

        {/* Answer state */}
        {
            state==='answer'&&
            <div className={styles.hostgameContainer}>
            <div className={styles.questionItem}>
                <div className={styles.questionTitle}>
                    <div className={styles.blank}></div>
                    <input type="text" value="Who is the best?"></input>
                    <MyButton
                        text="Skip"
                        size="medium"
                        color="blue"
                    />
                </div>
            
                <div className={styles.chartContainer}>
                    <div className={styles.chart}>
                        <BarChart
                            data={[13,26,57,28]}
                        />
                    </div>
                </div>

                <div className={styles.answerContainer}>
                    <div className={styles.answerLine}>
                        <div className={`${styles.answerBox} ${styles.red}`}>
                            <div className={styles.icon}>
                                <BsFillTriangleFill/>
                            </div>
                            <span>Answer 1</span>
                        </div>
                        <div className={`${styles.answerBox} ${styles.blue}`}>
                            <div className={styles.icon}>
                                <BsFillDiamondFill/>
                            </div>
                            <span>Answer 2</span>
                        </div>
                    </div>
                    
                    <div className={styles.answerLine}>
                        <div className={`${styles.answerBox} ${styles.yellow}`}>
                            <div className={styles.icon}>
                                <BsFillCircleFill/>
                            </div>
                                <span>Answer 3</span>
                            </div>

                            <div className={`${styles.answerBox} ${styles.green}`}>
                                <div className={styles.icon}>
                                    <BsFillSquareFill/>
                                </div>
                                <span>Answer 4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <span>3/4</span>
                    <span>Game PIN: 8956234</span>   
                </div>
        </div>
        }
        </div>
    )
}

export default HostGame;