import styles from '../styles/components/Profile.module.css';


export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/tosantos1.png" alt="Tiago Oliveira"/>
            <div>
                <strong>Tiago Oliveira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}