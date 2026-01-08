import type React from "react"
import { HistoryIcon, HouseIcon, SettingsIcon, SunsetIcon, TimerIcon } from "lucide-react"

import styles from './styles.module.css'

type MenuProps = {
    children: React.ReactNode
}

export function Menu(){
    return (
        <nav className={styles.menu}>
            <a className={styles['menu-link']} href="#">
                <HouseIcon></HouseIcon>
            </a>

            <a className={styles['menu-link']} href="#">
                <HistoryIcon></HistoryIcon>
            </a>

            <a className={styles['menu-link']} href="#">
                <SettingsIcon></SettingsIcon>
            </a>

            <a className={styles['menu-link']} href="#">
                <SunsetIcon></SunsetIcon>
            </a>
        </nav>
    )
}