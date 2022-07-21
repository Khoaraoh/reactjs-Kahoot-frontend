import { RiAddBoxFill } from "react-icons/ri";
import {
    BsFillDiamondFill,
    BsFillCircleFill,
    BsFillTriangleFill,
    BsFillSquareFill,
} from "react-icons/bs";

import MyButton from "../../components/MyButton/MyButton";
import styles from "./HostGame.module.scss";
import BarChart from "../../components/BarChart/BarChart";
import { socket } from "../../share/socket/socket";
import { useEffect } from "react";

// Fake data
//Change state to change view (question, answer, scoreboard, result).
const state = "question";

const scoreboard = [
    {
        name: "Khoa",
        score: 159,
    },
    {
        name: "Lộc",
        score: 196,
    },
    {
        name: "Nam",
        score: 132,
    },
    {
        name: "Tài",
        score: 201,
    },
    {
        name: "Long",
        score: 157,
    },
    {
        name: "An",
        score: 112,
    },
    {
        name: "Bình",
        score: 99,
    },
];

function HostGame() {
    return (
        <>
            {/* Question state */}
            {state === "question" && (
                <div className={styles.hostgameContainer}>
                    <div className={styles.questionItem}>
                        <div className={styles.questionTitle}>
                            <div className={styles.blank}></div>
                            <input type="text" value="Who is the best?"></input>
                            <MyButton text="Skip" size="medium" color="blue" />
                        </div>

                        <div className={styles.mediaContainer}>
                            <div className={styles.timer}>
                                <span>237</span>
                            </div>
                            <div className={styles.media}>
                                <RiAddBoxFill />
                                <p>Insert media</p>
                            </div>
                            <div className={styles.playerCounter}>
                                <span>12</span>
                                <label>Answers</label>
                            </div>
                        </div>

                        <div className={styles.answerContainer}>
                            <div className={styles.answerLine}>
                                <div
                                    className={`${styles.answerBox} ${styles.red}`}
                                >
                                    <div className={styles.icon}>
                                        <BsFillTriangleFill />
                                    </div>
                                    <span>Answer 1</span>
                                </div>
                                <div
                                    className={`${styles.answerBox} ${styles.blue}`}
                                >
                                    <div className={styles.icon}>
                                        <BsFillDiamondFill />
                                    </div>
                                    <span>Answer 2</span>
                                </div>
                            </div>

                            <div className={styles.answerLine}>
                                <div
                                    className={`${styles.answerBox} ${styles.yellow}`}
                                >
                                    <div className={styles.icon}>
                                        <BsFillCircleFill />
                                    </div>
                                    <span>Answer 3</span>
                                </div>

                                <div
                                    className={`${styles.answerBox} ${styles.green}`}
                                >
                                    <div className={styles.icon}>
                                        <BsFillSquareFill />
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
            )}

            {/* Answer state */}
            {state === "answer" && (
                <div className={styles.hostgameContainer}>
                    <div className={styles.questionItem}>
                        <div className={styles.questionTitle}>
                            <div className={styles.blank}></div>
                            <input type="text" value="Who is the best?"></input>
                            <MyButton text="Skip" size="medium" color="blue" />
                        </div>

                        <div className={styles.chartContainer}>
                            <div className={styles.chart}>
                                <BarChart data={[13, 26, 57, 28]} />
                            </div>
                        </div>

                        <div className={styles.answerContainer}>
                            <div className={styles.answerLine}>
                                <div
                                    className={`${styles.answerBox} ${styles.red}`}
                                >
                                    <div className={styles.icon}>
                                        <BsFillTriangleFill />
                                    </div>
                                    <span>Answer 1</span>
                                </div>
                                <div
                                    className={`${styles.answerBox} ${styles.blue}`}
                                >
                                    <div className={styles.icon}>
                                        <BsFillDiamondFill />
                                    </div>
                                    <span>Answer 2</span>
                                </div>
                            </div>

                            <div className={styles.answerLine}>
                                <div
                                    className={`${styles.answerBox} ${styles.yellow}`}
                                >
                                    <div className={styles.icon}>
                                        <BsFillCircleFill />
                                    </div>
                                    <span>Answer 3</span>
                                </div>

                                <div
                                    className={`${styles.answerBox} ${styles.green}`}
                                >
                                    <div className={styles.icon}>
                                        <BsFillSquareFill />
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
            )}

            {/* Scorceboard state */}
            {state === "scoreboard" && (
                <div className={styles.scoreboardContainer}>
                    <div className={styles.questionItem}>
                        <div className={styles.questionTitle}>
                            <div className={styles.blank}></div>
                            <span>Scoreboard</span>
                            <MyButton text="Skip" size="medium" color="blue" />
                        </div>
                    </div>

                    <div className={styles.body}>
                        {scoreboard
                            .sort((a, b) => b.score - a.score)
                            .map((item) => (
                                <div className={styles.scoreItem}>
                                    <span>{item.name}</span>
                                    <span>{item.score}</span>
                                </div>
                            ))}
                    </div>

                    <div className={styles.footer}>
                        <span>3/4</span>
                        <span>Game PIN: 8956234</span>
                    </div>
                </div>
            )}
            {/* Final Result state */}
            {state === "result" && (
                <div className={styles.resultContainer}>
                    <div className={styles.questionItem}>
                        <div className={styles.questionTitle}>
                            <div className={styles.blank}></div>
                            <span>Final Result</span>
                            <MyButton text="End" size="medium" color="red" />
                        </div>
                    </div>

                    <div className={styles.body}>
                        {scoreboard
                            .sort((a, b) => b.score - a.score)
                            .map((item) => (
                                <div className={styles.scoreItem}>
                                    <span>{item.name}</span>
                                    <span>{item.score}</span>
                                </div>
                            ))}
                    </div>

                    <div className={styles.footer}>
                        <span>3/4</span>
                        <span>Game PIN: 8956234</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default HostGame;
