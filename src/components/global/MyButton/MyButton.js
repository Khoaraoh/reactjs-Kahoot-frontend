import styles from "./MyButton.module.scss"

function MyButton(props)
{
    let myClassName = `${styles.MyButton} ${styles.className}`;

    //size detect
    switch(props.size){
        case 'medium':
            myClassName += ` ${styles.medium}`;
            break;
    } 

    //color detect
    switch(props.color){
        case 'black':
            myClassName += ` ${styles.black}`;
            break;
        case 'green':
            myClassName += ` ${styles.green}`;
            break;
    }
    return (
        <div className={myClassName}>
            <p>{props.text}</p>
        </div>
    )
}

export default MyButton