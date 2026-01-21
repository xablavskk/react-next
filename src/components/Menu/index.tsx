import type React from "react"
import { HistoryIcon, HouseIcon, SettingsIcon, SunsetIcon } from "lucide-react"

import styles from './styles.module.css'
import { Link } from "react-router-dom"
import { useCounter } from "../../contexts/CounterContext"

export function Menu(){
    const { toggleTheme } = useCounter()

    function toggleThemeHandler(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()
        toggleTheme()
    }

    return (
        <nav className={styles.menu}>
            <Link className={styles['menu-link']} to="/">
                <HouseIcon></HouseIcon>
            </Link>

            <Link className={styles['menu-link']} to="/history">
                <HistoryIcon></HistoryIcon>
            </Link>

            <Link className={styles['menu-link']} to="/settings">
                <SettingsIcon></SettingsIcon>
            </Link>

            <a className={styles['menu-link']} onClick={toggleThemeHandler}>
                <SunsetIcon></SunsetIcon>
            </a>
        </nav>
    )
}