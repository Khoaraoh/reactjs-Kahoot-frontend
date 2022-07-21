import React, { useEffect, useState } from "react";
import styles from "./HostGame.module.scss";
import { RiAddBoxFill } from "react-icons/ri";
import {
    BsFillDiamondFill,
    BsFillCircleFill,
    BsFillTriangleFill,
    BsFillSquareFill,
} from "react-icons/bs";

import MyButton from "../../components/MyButton/MyButton";
import { useSelector } from "react-redux";
import { socket } from "../../share/socket/socket";
import { useDispatch } from "react-redux";
import { updatePlayerAnswerCount, updateQuestionList } from "../../share/redux/reducers/game.reducers";
import { useNavigate } from "react-router-dom";

const QuestionView = () => {
  const currentGame = useSelector(state=>state.game.currentGame);
  const questionList = useSelector(state=>state.game.questionList);
  const playerAnswerCount = useSelector(state=>state.game.playerAnswerCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    socket.emit("getQuestion", 2);
    socket.on("getQuestionRes", data => {
      dispatch(updateQuestionList(data.questionData))
    })
    socket.on("playerAnswerRes", data=>{
      dispatch(updatePlayerAnswerCount(data?.playerAnswers?.length));
    })

    socket.on("questionTimeOut", ()=>{
      navigate('/host/game/scoreboard')
    })
  },[socket])
    return (
        <div className={styles.hostgameContainer}>
            <div className={styles.questionItem}>
                <div className={styles.questionTitle}>
                    <div className={styles.blank}></div>
                    <input type="text" value={questionList?.questionData?.question}></input>
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
                        <span>{!!playerAnswerCount ? playerAnswerCount : 0}</span>
                        <label>Answers</label>
                    </div>
                </div>

                <div className={styles.answerContainer}>
                    <div className={styles.answerLine}>
                        <div className={`${styles.answerBox} ${styles.red}`}>
                            <div className={styles.icon}>
                                <BsFillTriangleFill />
                            </div>
                            <span>{questionList?.questionData?.answers[0]?.answer}</span>
                        </div>
                        <div className={`${styles.answerBox} ${styles.blue}`}>
                            <div className={styles.icon}>
                                <BsFillDiamondFill />
                            </div>
                            <span>{questionList?.questionData?.answers[1]?.answer}</span>
                        </div>
                    </div>

                    <div className={styles.answerLine}>
                        <div className={`${styles.answerBox} ${styles.yellow}`}>
                            <div className={styles.icon}>
                                <BsFillCircleFill />
                            </div>
                            <span>{questionList?.questionData?.answers[2]?.answer}</span>
                        </div>

                        <div className={`${styles.answerBox} ${styles.green}`}>
                            <div className={styles.icon}>
                                <BsFillSquareFill />
                            </div>
                            <span>{questionList?.questionData?.answers[3]?.answer}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <span>Game PIN: {currentGame?.room}</span>
            </div>
        </div>
    );
};

export default QuestionView;
