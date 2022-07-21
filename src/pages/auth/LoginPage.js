import LoginForm from "../../components/AuthForm/LoginForm";

import styles from "./AuthPage.module.scss";

function LoginPage() {
    return (
        <div className={styles.authPageContainer}>
            <LoginForm />
        </div>
    );
}

export default LoginPage;
