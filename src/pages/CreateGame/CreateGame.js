import { useReducer } from "react";
import MyButton from "../../components/MyButton/MyButton";
import MultipleSelect from "../../components/Dropdown/Dropdown";
import {BsQuestionSquare} from 'react-icons/bs';
import {RiAddBoxFill} from 'react-icons/ri';
import {IoTimeOutline, IoOptions} from 'react-icons/io5';
import {BiMedal} from 'react-icons/bi';
import {RiKeyboardBoxLine} from 'react-icons/ri';
import {MdContentCopy, MdDeleteOutline} from 'react-icons/md';
import styles from "./CreateGame.module.scss";

const initQuestionList = [
    {
        id: 1,
        //Type 1 = Quiz
        type: 1,
        question: "",
        media: "",
        answers: ["", "", "", ""],
        selected: false
    },
    {
        id: 2,
        //Type 2 = True or false
        question: "Question 2",
        type: 2,
        media: "",
        answers: ["", "", "", ""],
        selected: true
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
                {questionList.map((questionItem) => (
                    questionItem.selected ? (
                        <div className={`${styles.questionSelector} ${styles.selected}`}>
                            <div className={styles.title}>
                                {questionItem.type === 1&&
                                    <label>{questionItem.id} Quiz</label>
                                }
                                {questionItem.type === 2&&
                                    <label>{questionItem.id} True or False</label>
                                }
                            </div>
                            <div className={styles.content}>
                                <div className={styles.control}> 
                                    <MdContentCopy/>
                                    <MdDeleteOutline/>
                                </div>
                                <div className={styles.contentBoard}>
                                    <RiKeyboardBoxLine/>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div className={styles.questionSelector}>
                            <div className={styles.title}>
                                {questionItem.type === 1&&
                                    <label>{questionItem.id} Quiz</label>
                                }
                                {questionItem.type === 2&&
                                    <label>{questionItem.id} True or False</label>
                                }
                            </div>
                            <div className={styles.content}>
                                <div className={styles.control}> 
                                    <MdContentCopy/>
                                    <MdDeleteOutline/>
                                </div>
                                <div className={styles.contentBoard}>
                                    <RiKeyboardBoxLine/>
                                </div>
                            </div>
                        </div>
                    )
                ))}
                <div className={styles.addButton}>
                    <MyButton
                        text= "Add question"
                        size="medium"
                        color="blue"
                    />
                </div>
                </div>

                <div className={styles.centerBody}>
                    {questionList.map((questionItem) => questionItem.selected&&(
                        <div className={styles.questionItem}>
                            <div className={styles.questionTitle}>
                                <input type="text" placeholder="Start typing your question" value={questionItem.question}></input>
                            </div>

                            <div className={styles.mediaContainer}>
                                <div className={styles.media}>
                                    <RiAddBoxFill/>
                                    <p>Insert media</p>
                                </div>
                            </div>

                            <div className={styles.answerContainer}>
                                <div className={styles.answerLine}>
                                    <div className={styles.answerBox}>
                                        <div className={styles.redRectangle}></div>
                                        <input type="text" placeholder="Add answer 1" value={questionItem.answers[0]}></input>
                                    </div>

                                    <div className={styles.answerBox}>
                                        <div className={styles.blueRectangle}></div>
                                        <input type="text" placeholder="Add answer 2" value={questionItem.answers[1]}></input>
                                    </div>
                                </div>
                                
                                <div className={styles.answerLine}>
                                    <div className={styles.answerBox}>
                                        <div className={styles.yellowRectangle}></div>
                                        <input type="text" placeholder="Add answer 3" value={questionItem.answers[2]}></input>
                                    </div>

                                    <div className={styles.answerBox}>
                                        <div className={styles.greenRectangle}></div>
                                        <input type="text" placeholder="Add answer 4" value={questionItem.answers[3]}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.rightBody}>
                    <div className={styles.rightBodyItem}>
                        <div className={styles.selector}>
                            <BsQuestionSquare/>
                            <label>Question type</label>
                        </div>
                        <MultipleSelect className={styles.dropdown} type="questionType"/>
                    </div>
                    <div className={styles.rightBodyItem}>
                        <div className={styles.selector}>
                            <IoTimeOutline/>
                            <label>Time limit</label>
                        </div>
                        <MultipleSelect className={styles.dropdown} type="timeLimit"/>
                    </div>
                    <div className={styles.rightBodyItem}>
                        <div className={styles.selector}>
                            <BiMedal/>
                            <label>Point</label>
                        </div>
                        <MultipleSelect className={styles.dropdown} type="pointSelection"/>
                    </div>
                    <div className={styles.rightBodyItem}>
                        <div className={styles.selector}>
                            <IoOptions/>
                            <label>Answer options</label>
                        </div>
                        <MultipleSelect className={styles.dropdown} type="answerOptions"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateGame;

