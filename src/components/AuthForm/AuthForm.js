import {Link} from 'react-router-dom';

import MyButton from '../MyButton/MyButton';
import styles from './AuthForm.module.scss';

function AuthForm({typeForm})
{
    switch(typeForm)
    {
        case 'signup':
        {
            return (
                <div className={styles.authFormContainer}>
                    <div className={styles.title}>
                        <h3>Sign up with your email</h3>
                    </div>
                    <div className={styles.mainFormContainer}>
                        <label>Email</label>
                        <input type="text"></input>
                        <label>Password</label>
                        <input type="text"></input>
                        <div className={styles.button}>
                        <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <MyButton
                                text="Sign up"
                                color="blue"
                                size="medium"
                            ></MyButton>
                        </Link>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <p>Already have an account?</p>
                        <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <a>Log in</a>
                        </Link>
                    </div>
                </div>
            )
        }
        case "login":
        {
            return (
                <div className={styles.authFormContainer}>
                    <div className={styles.title}>
                        <h3>Log in</h3>
                    </div>
                    <div className={styles.mainFormContainer}>
                        <label>Username or email</label>
                        <input type="text"></input>
                        <label>Password</label>
                        <input type="text"></input>
                            <div className={styles.button}>
                            <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <MyButton
                                    text="Log in"
                                    color="green"
                                    size="medium"
                                ></MyButton>  
                            </Link>
                            </div>
                    </div>
                    <div className={styles.footer}>
                        <p>Don't have an account?</p>
                        <Link to="/signup" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <a>Sign up</a>
                        </Link>
                    </div>
                </div>
            )
        }
    }
}

export default AuthForm;