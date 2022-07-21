import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import styles from "./AuthForm.module.scss";

const SignupForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const onSubmitForm = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => {
                if (res.status === 200) {
                    navigate("/login");
                }
            })
            .catch((e) => console.log(e));
    };
    return (
        <div className={styles.authFormContainer}>
            <div className={styles.title}>
                <h3>Sign up with your email</h3>
            </div>
            <div className={styles.mainFormContainer}>
                <label>Email</label>
                <input
                    type="email"
                    onChange={onEmailChange}
                    value={email}
                ></input>
                <label>Password</label>
                <input
                    type="password"
                    onChange={onPasswordChange}
                    value={password}
                ></input>
                <div className={styles.button}>
                    <MyButton
                        text="Sign up"
                        color="blue"
                        size="medium"
                        onClick={onSubmitForm}
                    ></MyButton>
                </div>
            </div>
            <div className={styles.footer}>
                <p>Already have an account?</p>
                <Link
                    to="/login"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                >
                    <a>Log in</a>
                </Link>
            </div>
        </div>
    );
};

export default SignupForm;
