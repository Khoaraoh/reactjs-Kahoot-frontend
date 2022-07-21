import React, { useEffect } from "react";
import styles from "./HostGame.module.scss";
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
import { updateQuestionList } from "../../share/redux/reducers/game.reducers";
import { useNavigate } from "react-router-dom";

const AnswerView = () => {
  const currentGame = useSelector(state=>state.game.currentGame);
  const questionList = useSelector(state=>state.game.questionList);
  const player = useSelector(state=>state.player.player)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    socket.on("hostGetQuestionRes", data=>{
      dispatch(updateQuestionList(data.questionData))
    })
    socket.on("updatePlayerInfo", data=>{
    })
    socket.on("questionTimeOut", ()=>{
      navigate('/player/game/scoreboard')
    })
  },[socket])

  const handleClickAnswer = (value) => {
    socket.emit("playerAnswer", ({playerId: socket.id, questionId: questionList.questionData.id, answerContent: value.answer, index: value._id}))
    
  } 

    return (
        <div className={styles.hostgameContainer}>
            <div className={styles.questionItem}>
                <div className={styles.questionTitle}>
                    <div className={styles.blank}></div>
                    <input type="text" value={questionList?.questionData?.question}></input>
                    <MyButton text="Skip" size="medium" color="blue" />
                </div>

                <div className={styles.chartContainer}>
                    <div className={styles.chart}>
                        
                    </div>
                </div>

                <div className={styles.answerContainer}>
                    <div className={styles.answerLine}>
                        <div className={`${styles.answerBox} ${styles.red}`} onClick={()=>handleClickAnswer(questionList?.questionData?.answers[0])}>
                            <div className={styles.icon}>
                                <BsFillTriangleFill />
                            </div>
                            <span>{questionList?.questionData?.answers[0]?.answer}</span>
                        </div>
                        <div className={`${styles.answerBox} ${styles.blue}`} onClick={()=>handleClickAnswer(questionList?.questionData?.answers[1])}>
                            <div className={styles.icon}>
                                <BsFillDiamondFill />
                            </div>
                            <span>{questionList?.questionData?.answers[1]?.answer}</span>
                        </div>
                    </div>

                    <div className={styles.answerLine}>
                        <div className={`${styles.answerBox} ${styles.yellow}`} onClick={()=>handleClickAnswer(questionList?.questionData?.answers[2])}>
                            <div className={styles.icon}>
                                <BsFillCircleFill />
                            </div>
                            <span>{questionList?.questionData?.answers[2]?.answer}</span>
                        </div>

                        <div className={`${styles.answerBox} ${styles.green}`} onClick={()=>handleClickAnswer(questionList?.questionData?.answers[3])}>
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

export default AnswerView;
