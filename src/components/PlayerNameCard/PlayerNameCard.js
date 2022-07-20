import styles from "./PlayerNameCard.module.scss";

function PlayerNameCard({ name }) {
    return (
        <div className={styles.playerNameCardContainer}>
            <span>{name}</span>
        </div>
    );
}

export default PlayerNameCard;
