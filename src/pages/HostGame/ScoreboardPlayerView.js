import React, { useEffect } from "react";
import styles from './HostGame.module.scss';


import MyButton from "../../components/MyButton/MyButton";
import { socket } from "../../share/socket/socket";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateRankList } from "../../share/redux/reducers/game.reducers";
import { useNavigate } from "react-router-dom";


const ScoreboardPlayerView = () => {
  const currentGame = useSelector(state=>state.game.currentGame)
  const rankList = useSelector(state=>state.game.rankList);
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  useEffect(()=>{
    socket.on("playerRank", data => {
      dispatch(updateRankList(data));
    })
  },[socket])

  const handleSkipClick = () => {
    navigate("/game/result");
  }
    return (
        <div className={styles.scoreboardContainer}>
            <div className={styles.questionItem}>
                <div className={styles.questionTitle}>
                    <div className={styles.blank}></div>
                    <span>Scoreboard Of Game {rankList?.gameName}</span>
                    <MyButton text="Skip" size="medium" color="blue" onClick={handleSkipClick} />
                </div>
            </div>

            <div className={styles.body}>
            {rankList?.rankList?.map((item) => (
                        <div className={styles.scoreItem}>
                            <span>{item.name}</span>
                            <span>{item.score}</span>
                        </div>
                    ))}
            </div>

            <div className={styles.footer}>
                <span>Game PIN: {currentGame?.room}</span>
            </div>
        </div>
    );
};

export default ScoreboardPlayerView;
