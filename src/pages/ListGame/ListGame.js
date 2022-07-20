import {FaUser} from 'react-icons/fa';

import MyButton from '../../components/MyButton/MyButton';
import styles from './ListGame.module.scss';
import {RiKeyboardBoxLine} from 'react-icons/ri';

//fake data
const username = 'Đăng Khoa'

const gameList = [
    {
        name: 'Game 1'
    },
    {
        name: 'Game 2'

    },
    {
        name: 'Test'
    },
    {
        name: 'Game 1'
    },
    {
        name: 'Game 2'

    },
    {
        name: 'Test'
    },
    {
        name: 'Game 1'
    },
    {
        name: 'Game 2'

    },
    {
        name: 'Test'
    }
]

function ListGame()
{
    return (
        <div className={styles.listGameContainer}>
            <div className={styles.header}>
                <span>Welcome, {username}</span>

                <div className={styles.account}>
                    <FaUser/>
                </div>

                <MyButton
                    color="blue"
                    text="Create"
                    size="medium"
                />
            </div>

            <div className={styles.body}>
                {gameList.map(gameItem => (
                    <div className={styles.gameCard}>
                        <div className={styles.left}>
                            <RiKeyboardBoxLine/>
                            <span>{gameItem.name}</span>
                        </div>
                        <div className={styles.right}>
                            <MyButton
                                color="red"
                                size="small"
                                text="Delete"
                            />
                            <MyButton
                                color="green"
                                size="small"
                                text="Update"
                            />
                            <MyButton
                                color="blue"
                                size="small"
                                text="Start"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListGame;