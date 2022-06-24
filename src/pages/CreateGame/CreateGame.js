import { useReducer } from "react";
import MyButton from "../../components/MyButton/MyButton";
import MultipleSelect from "../../components/Dropdown/Dropdown";
import {BsQuestionSquare} from 'react-icons/bs'

import styles from "./CreateGame.module.scss";

const initQuestionList = [
    {
        id: 1,
        question: "question",
        media: "",
        answers: ["A1", "A2", "A3", "A4"],
    }
];

const reducer = (state, action) => {
    switch (action.type) {
      case "CREATE":
        return state.map((questionList) => {
            
        });
      default:
        return state;
    }
};


function CreateGame()
{

    const [questionList, dispatch] = useReducer(reducer, initQuestionList);

    const handleAdd = (questionList) => {
        dispatch({ type: "CREATE", questionList: questionList });
    };

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
                    {questionList.map((questionItem) => (
                        <div className={styles.questionItem}>
                            <div className={styles.questionTitle}>
                                <input type="text" placeholder="Start typing your question" value={questionItem.question}></input>
                            </div>

                            <div className={styles.mediaContainer}>
                                <div className={styles.media}>
                                    <p>Insert media</p>
                                </div>
                            </div>

                            <div className={styles.answerContainer}>
                                <div className={styles.answerLine}>
                                    <div className={styles.answerBox}>
                                        <input type="text" placeholder="Add answer 1" value={questionItem.answers[0]}></input>
                                    </div>

                                    <div className={styles.answerBox}>
                                        <input type="text" placeholder="Add answer 2" value={questionItem.answers[1]}></input>
                                    </div>
                                </div>
                                
                                <div className={styles.answerLine}>
                                    <div className={styles.answerBox}>
                                        <input type="text" placeholder="Add answer 3 (optional)" value={questionItem.answers[2]}></input>
                                    </div>

                                    <div className={styles.answerBox}>
                                        <input type="text" placeholder="Add answer 4 (optional)" value={questionItem.answers[3]}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.rightBody}>
                    <div className={styles.questionType}>
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

