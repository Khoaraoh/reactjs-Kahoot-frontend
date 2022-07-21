import { useReducer, useState } from "react";
import MyButton from "../../components/MyButton/MyButton";
import MultipleSelect from "../../components/Dropdown/Dropdown";
import { BsQuestionSquare } from "react-icons/bs";
import { RiAddBoxFill } from "react-icons/ri";
import { IoTimeOutline, IoOptions } from "react-icons/io5";
import { BiMedal } from "react-icons/bi";
import { RiKeyboardBoxLine } from "react-icons/ri";
import { MdContentCopy, MdDeleteOutline } from "react-icons/md";
import styles from "./CreateGame.module.scss";
import { socket } from "../../share/socket/socket";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initQuestionList = [
    {
        id: 1,
        //Type 1 = Quiz
        type: 1,
        question: "",
        media: "",
        answers: ["", "", "", ""],
        selected: false,
    },
    {
        id: 2,
        //Type 2 = True or false
        question: "Question 2",
        type: 2,
        media: "",
        answers: ["", "", "", ""],
        selected: true,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return state.map((questionList) => {});
        default:
            return state;
    }
};

function CreateGame() {
    const [questionList, dispatch] = useReducer(reducer, initQuestionList);

    const handleAdd = (questionList) => {
        dispatch({ type: "CREATE", questionList: questionList });
    };

    const [gameName, setGameName] = useState("");
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const navigate = useNavigate();

    const onGameNameChange = (e) => {
        setGameName(e.target.value);
    };

    const onQuestionChange = (e) => {
        setQuestion(e.target.value);
    };
    const onAnswer1Change = (e) => {
        setAnswer1(e.target.value);
    };
    const onAnswer2Change = (e) => {
        setAnswer2(e.target.value);
    };
    const onAnswer3Change = (e) => {
        setAnswer3(e.target.value);
    };
    const onAnswer4Change = (e) => {
        setAnswer4(e.target.value);
    };
    const onCorrectAnswerChange = (e) => {
        setCorrectAnswer(e.target.value);
    };

    const onSaveGame = () => {
        const data = {
            name: gameName,
            questions: [
                {
                    id: 1,
                    question,
                    answers: [
                        {
                            answer: answer1,
                        },
                        {
                            answer: answer2,
                        },
                        {
                            answer: answer3,
                        },
                        {
                            answer: answer4,
                        },
                    ],
                    correctAnswer,
                },
            ],
            userId: socket.id,
        };
        socket.emit("createGame", data);
        socket.on("createGameResult", (msg) => {});
        toast.success("Create game successfully");
        navigate("/dashboard");
    };

    return (
        <div className={styles.createGameContainer}>
            <div class={styles.header}>
                <div className={styles.leftHeader}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/1280px-Kahoot_Logo.svg.png"></img>
                    <input
                        type="text"
                        placeholder="Enter kahoot title..."
                        value={gameName}
                        onChange={onGameNameChange}
                    ></input>
                </div>

                <div className={styles.rightHeader}>
                    <MyButton text="Preview" size="small" color="green" />
                    <MyButton text="Exit" size="small" color="gray" />
                    <MyButton
                        text="Save"
                        size="small"
                        color="blue"
                        onClick={onSaveGame}
                    />
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.leftBody}>
                    {questionList.map((questionItem) =>
                        questionItem.selected ? (
                            <div
                                className={`${styles.questionSelector} ${styles.selected}`}
                            >
                                <div className={styles.title}>
                                    {questionItem.type === 1 && (
                                        <label>{questionItem.id} Quiz</label>
                                    )}
                                    {questionItem.type === 2 && (
                                        <label>
                                            {questionItem.id} True or False
                                        </label>
                                    )}
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.control}>
                                        <MdContentCopy />
                                        <MdDeleteOutline />
                                    </div>
                                    <div className={styles.contentBoard}>
                                        <RiKeyboardBoxLine />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.questionSelector}>
                                <div className={styles.title}>
                                    {questionItem.type === 1 && (
                                        <label>{questionItem.id} Quiz</label>
                                    )}
                                    {questionItem.type === 2 && (
                                        <label>
                                            {questionItem.id} True or False
                                        </label>
                                    )}
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.control}>
                                        <MdContentCopy />
                                        <MdDeleteOutline />
                                    </div>
                                    <div className={styles.contentBoard}>
                                        <RiKeyboardBoxLine />
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    <div className={styles.addButton}>
                        <MyButton
                            text="Add question"
                            size="medium"
                            color="blue"
                        />
                    </div>
                </div>

                <div className={styles.centerBody}>
                    {questionList.map(
                        (questionItem) =>
                            questionItem.selected && (
                                <div className={styles.questionItem}>
                                    <div className={styles.questionTitle}>
                                        <input
                                            type="text"
                                            placeholder="Start typing your question"
                                            value={question}
                                            onChange={onQuestionChange}
                                        ></input>
                                    </div>


                                    <div className={styles.answerContainer}>
                                        <div className={styles.answerLine}>
                                            <div className={styles.answerBox}>
                                                <div
                                                    className={
                                                        styles.redRectangle
                                                    }
                                                ></div>
                                                <input
                                                    type="text"
                                                    placeholder="Add answer 1"
                                                    value={answer1}
                                                    onChange={onAnswer1Change}
                                                ></input>
                                            </div>

                                            <div className={styles.answerBox}>
                                                <div
                                                    className={
                                                        styles.blueRectangle
                                                    }
                                                ></div>
                                                <input
                                                    type="text"
                                                    placeholder="Add answer 2"
                                                    value={answer2}
                                                    onChange={onAnswer2Change}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className={styles.answerLine}>
                                            <div className={styles.answerBox}>
                                                <div
                                                    className={
                                                        styles.yellowRectangle
                                                    }
                                                ></div>
                                                <input
                                                    type="text"
                                                    placeholder="Add answer 3"
                                                    value={answer3}
                                                    onChange={onAnswer3Change}
                                                ></input>
                                            </div>

                                            <div className={styles.answerBox}>
                                                <div
                                                    className={
                                                        styles.greenRectangle
                                                    }
                                                ></div>
                                                <input
                                                    type="text"
                                                    placeholder="Add answer 4"
                                                    value={answer4}
                                                    onChange={onAnswer4Change}
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    )}
                </div>

                <div className={styles.rightBody}>

                    <div className={styles.rightBodyItem}>
                        <div className={styles.selector}>
                            <IoTimeOutline />
                            <label>Correct answer</label>
                        </div>
                        <input
                            className={styles.correctAns}
                            value={correctAnswer}
                            onChange={onCorrectAnswerChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateGame;
