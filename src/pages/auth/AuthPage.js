import AuthForm from "../../components/AuthForm/AuthForm";

import styles from "./AuthPage.module.scss";

function AuthPage({type})
{
    return(
        <div className={styles.authPageContainer}>
            <AuthForm
                typeForm={type}
            />
        </div>
    )
}

export default AuthPage;