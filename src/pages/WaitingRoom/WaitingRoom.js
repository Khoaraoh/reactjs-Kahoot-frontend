

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { socket } from '../../share/socket/socket';
import styles from './WaitingRoom.module.scss';

//Fake data

function WaitingRoom()
{
  const playerState = useSelector(state=>state.player.player);
  const navigate = useNavigate();

  useEffect(()=>{
    socket.on("hostStartingGame", ()=>{
      navigate("/player/game")
    })
  },[socket])
    return (
        <div className={styles.roomContainer}>
            <div className={styles.body}>
                <h1>You're in! Waiting for host to start game.</h1>
                <span>See your nickname in screen?</span>
            </div>

            <div className={styles.footer}>
                <span>{playerState?.name}</span>
            </div>
        </div>
    )
}

export default WaitingRoom;