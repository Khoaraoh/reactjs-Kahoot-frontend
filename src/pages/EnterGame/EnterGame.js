import styles from './EnterGame.module.scss'
import MyButton from '../../components/global/MyButton/MyButton';

function EnterGame()
{
    return (
        <div className={styles.enterGameContainer}>
            <div className={styles.header}>
                <button>EN</button>
                <MyButton
                            text='Enter'
                            size='medium'
                            color='blue'
                        />
            </div>

            <div className={styles.content}>
                <img src='https://assets-cdn.kahoot.it/controller/v2/assets/icn_kahoot_logo.58b66a21.svg'></img>
                <form action='#'>
                    <input type='text' placeholder='Game PIN'></input>
                    <div>
                        <MyButton
                            text='Enter'
                            size='medium'
                            color='blue'
                        />
                    </div>
                    
                </form>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>Create your own Kahoot for FREE at &nbsp;</p>
                    <a>kahoot.com</a>
                </div>
                <div className={styles.footerContent}>
                    <a>Terms</a>
                    <p>&nbsp; | &nbsp;</p>
                    <a>Privacy</a>
                </div>
            </div>
        </div>
    )
}

export default EnterGame;