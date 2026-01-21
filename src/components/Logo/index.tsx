import type React from "react"
import { TimerIcon } from "lucide-react"

import styles from './styles.module.css'
import { Link } from "react-router-dom"

type LogoProps = {
    children: React.ReactNode
}

export function Logo(){
    return (
        <div className={styles.logo}>
            <Link className={styles['logo-link']} to="/">
                <TimerIcon></TimerIcon>
                <span>Chronos</span>
            </Link>
        </div>
    )
}