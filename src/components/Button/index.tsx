import { CircleStop, PlayIcon, Plus } from "lucide-react";
import styles from './styles.module.css';
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isRunning: boolean;
};

export function Button({ isRunning, ...props }: ButtonProps) {
    const btnClass = isRunning ? styles.btnStop : styles.btnSend;
    const iconToShow = isRunning ? <CircleStop /> : <Plus />;

    return (
        <div className={styles.info}>
            <button className={btnClass} {...props}>
                {iconToShow}
            </button>
        </div>
    );
}