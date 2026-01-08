import type React from "react"
import { TimerIcon } from "lucide-react"

import styles from './styles.module.css'

type LogoProps = {
    children: React.ReactNode
}

export function Logo(){
    return (
        <div className={styles.logo}>
            <a className={styles['logo-link']} href="#">
                <TimerIcon></TimerIcon>
                <span>Chronos</span>
            </a>
        </div>
    )
}