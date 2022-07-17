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
                            <MyButton
                                text="Sign up"
                                color="blue"
                                size="medium"
                            ></MyButton> 
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <p>Already have an account?</p>
                        <a>Log in</a>
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
                            <MyButton
                                text="Sign up"
                                color="green"
                                size="medium"
                            ></MyButton> 
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <p>Don't have an account?</p>
                        <a>Sign up</a>
                    </div>
                </div>
            )
        }
    }
}

export default AuthForm;