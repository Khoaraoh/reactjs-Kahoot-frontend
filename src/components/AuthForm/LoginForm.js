import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../MyButton/MyButton";

import styles from "./AuthForm.module.scss";

const LoginForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await result.json();
            if (data) {
                const { authenticated, accessToken, refreshToken } = data;
                localStorage.setItem("atk", accessToken);
                localStorage.setItem("rft", refreshToken);
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.authFormContainer}>
            <div className={styles.title}>
                <h3>Log in</h3>
            </div>
            <div className={styles.mainFormContainer}>
                <label>Username or email</label>
                <input
                    type="email"
                    value={email}
                    onChange={onEmailChange}
                ></input>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                ></input>
                <div className={styles.button}>
                    <MyButton
                        text="Log in"
                        color="green"
                        size="medium"
                        onClick={onSubmitForm}
                    ></MyButton>
                </div>
            </div>
            <div className={styles.footer}>
                <p>Don't have an account?</p>
                <Link
                    to="/signup"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                >
                    <a>Sign up</a>
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
