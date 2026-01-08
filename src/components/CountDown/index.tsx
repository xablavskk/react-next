import styles from './styles.module.css';

type HeadingProps = {
    children: React.ReactNode 
}

export function CountDown() {
    return (
        <div className={styles.container}>
            00:00
        </div>
    );
}