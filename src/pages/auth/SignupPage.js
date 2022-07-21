import SignupForm from "../../components/AuthForm/SignupForm";

import styles from "./AuthPage.module.scss";

function SignupPage() {
    return (
        <div className={styles.authPageContainer}>
            <SignupForm />
        </div>
    );
}

export default SignupPage;
