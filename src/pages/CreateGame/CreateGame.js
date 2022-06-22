import MyButton from "../../components/MyButton/MyButton";
import MultipleSelect from "../../components/Dropdown/Dropdown";
import {BsQuestionSquare} from 'react-icons/bs'

import styles from "./CreateGame.module.scss";

function CreateGame()
{
    return (
        <div className={styles.createGameContainer}>
            <div class={styles.header}>
                <div className={styles.leftHeader}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/1280px-Kahoot_Logo.svg.png'></img>  
                    <input type='text' placeholder='Enter kahoot title...'></input>
                </div>
                
                <div className={styles.rightHeader}>
                    <MyButton
                            text='Preview'
                            size='small'
                            color='green'
                    />
                    <MyButton
                            text='Exit'
                            size='small'
                            color='gray'
                    />
                    <MyButton
                            text='Save'
                            size='small'
                            color='blue'
                    />
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.leftBody}>

                </div>

                <div className={styles.centerBody}>

                </div>

                <div className={styles.rightBody}>
                    <div className={styles.questionTitle}>
                        <BsQuestionSquare/>
                        <label>Question type</label>
                    </div>
                    <MultipleSelect className={styles.dropdown} type="questionType"/>
                </div>
            </div>
        </div>
    )
}

export default CreateGame;

