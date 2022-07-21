import React, { useEffect } from "react";
import styles from "./HostGame.module.scss";


import MyButton from "../../components/MyButton/MyButton";
import { socket } from "../../share/socket/socket";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateRankList } from "../../share/redux/reducers/game.reducers";

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

const ResultView = () => {
  const currentGame = useSelector(state=>state.game.currentGame)
  const rankList = useSelector(state=>state.game.rankList);
  const dispatch = useDispatch(); 
  useEffect(()=>{
    socket.emit("getRankList");
    socket.on("getRankListRes", data => {
      dispatch(updateRankList(data));
    })
  },[socket])
    return (
        <div className={styles.resultContainer}>
            <div className={styles.questionItem}>
                <div className={styles.questionTitle}>
                    <div className={styles.blank}></div>
                    <span>Final Result Of Game {rankList?.gameName}</span>
                    <MyButton text="End" size="medium" color="red" />
                </div>
            </div>

            <div className={styles.body}>
                {rankList?.rankList
                    .map((item) => (
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

export default ResultView;
