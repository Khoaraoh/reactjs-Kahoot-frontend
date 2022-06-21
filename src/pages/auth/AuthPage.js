import AuthForm from "../../components/AuthForm/AuthForm";

import styles from "./AuthPage.module.scss";

function AuthPage()
{
    return(
        <div className={styles.authPageContainer}>
            <AuthForm
                type="login"
            />
        </div>
    )
}

export default AuthPage;