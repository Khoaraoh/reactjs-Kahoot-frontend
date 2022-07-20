import {BsFillDiamondFill, BsFillCircleFill, BsFillTriangleFill, BsFillSquareFill} from "react-icons/bs";
import {GiLaurelsTrophy} from "react-icons/gi";

import styles from './UserGame.module.scss';

//Fake data: state of view
//question, anwser, result

const state = 'result';
const nickname = 'Khoa';
const point = 76
const isAnswerRight = false;
const plusPoint = 50;

function UserGame()
{
    return (
        <div>
            {
                state==='question' &&
                <div className={styles.gameContainer}>
                    <div className={styles.header}>
                        <span>Question 1/4</span>
                    </div>

                    <div className={styles.body}>
                        <div className={styles.line}>
                            <div className={`${styles.selection} ${styles.red}`}>
                                <BsFillTriangleFill/>
                            </div>
                            <div className={`${styles.selection} ${styles.blue}`}>
                                <BsFillDiamondFill/>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={`${styles.selection} ${styles.yellow}`}>
                                <BsFillCircleFill/>
                            </div>
                            <div className={`${styles.selection} ${styles.green}`}>
                                <BsFillSquareFill/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <span>{nickname}</span>
                        <div className={styles.point}>
                            <span>{point}</span>
                        </div>
                    </div>
            </div>
            }   
            
            {
                state==='answer' &&
                <div className={styles.gameContainer}>
                    <div className={styles.header}>
                        <span>Question 1/4</span>
                    </div>

                    <div className={styles.answerBody}>
                        {isAnswerRight?
                        <div className={styles.correct}>
                            <h1>Correct Answer</h1>
                            <span>+{plusPoint}</span>
                            <p>You're in 2rd place</p>
                        </div>:
                        <div className={styles.incorrect}>
                            <h1>Incorrect Answer</h1>
                            <span>+0</span>
                            <p>You're in 2rd place</p>
                        </div>
                        }
                    </div>

                    <div className={styles.footer}>
                        <span>{nickname}</span>
                        <div className={styles.point}>
                            <span>{point}</span>
                        </div>
                    </div>
            </div>
            }

            {
                state==='result' &&
                <div className={styles.gameContainer}>
                    <div className={styles.header}>
                        <span>Your final result</span>
                    </div>

                    <div className={styles.resultBody}>
                        <div className={styles.result}>
                            <GiLaurelsTrophy/>
                            <h1>{point}&nbsp;point</h1>
                            <span>3rd&nbsp;Place</span>
                            
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <span>{nickname}</span>
                        <div className={styles.point}>
                            <span>{point}</span>
                        </div>
                    </div>
            </div>
            }

        </div>
    )
}

export default UserGame;