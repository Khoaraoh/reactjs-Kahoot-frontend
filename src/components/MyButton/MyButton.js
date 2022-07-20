import styles from "./MyButton.module.scss"

function MyButton(props)
{
    let myClassName = `${styles.MyButton} ${props.className}`;

    //size detect
    switch(props.size){
        case 'small':
            myClassName += ` ${styles.small}`;
            break;
        case 'medium':
            myClassName += ` ${styles.medium}`;
            break;
        default:
            myClassName += ` ${styles.small}`;
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
        case 'blue':
            myClassName += ` ${styles.blue}`;
            break;
        case 'red':
            myClassName += ` ${styles.red}`;
            break;
        case 'yellow':
            myClassName += ` ${styles.yellow}`;
            break;
        case 'gray':
            myClassName += ` ${styles.gray}`;
            break;
        case 'white':
            myClassName += ` ${styles.white}`;
            break;
        default:
            myClassName += ` ${styles.black}`;
    }
    return (
        <div className={myClassName} {...props}>
            <p>{props.text}</p>
        </div>
    )
}

export default MyButton