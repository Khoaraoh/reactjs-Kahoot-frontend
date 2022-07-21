import { RiAddBoxFill } from "react-icons/ri";
import {
    BsFillDiamondFill,
    BsFillCircleFill,
    BsFillTriangleFill,
    BsFillSquareFill,
} from "react-icons/bs";

import MyButton from "../../components/MyButton/MyButton";
import BarChart from "../../components/BarChart/BarChart";
import styles from "./HostGame.module.scss";
import { socket } from "../../share/socket/socket";
import { useEffect } from "react";

// Fake data
//Change state to change view (question, answer, scoreboard, result).

function HostGame() {
    return (
        <>
            <h1>Host game view</h1>
        </>
    );
}

export default HostGame;
