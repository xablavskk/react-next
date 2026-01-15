import { CircleStop, PlayIcon } from "lucide-react";

import styles from './styles.module.css'

type ButtonProps = {
    isRunning: boolean;
    onClick?: () => void;
};

export function Button({ onClick, isRunning }: ButtonProps) {
    const btnClass = !isRunning ? styles.btnSend : styles.btnStop;
    const iconToShow = !isRunning ? <PlayIcon /> : <CircleStop />;

    return (
        <div className={styles.info}>
            <button className={btnClass} onClick={onClick}>{iconToShow}</button>
        </div>
    )
}