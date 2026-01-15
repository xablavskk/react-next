import type React from "react"
import { HistoryIcon, HouseIcon, SettingsIcon, SunsetIcon } from "lucide-react"

import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Menu(){
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const navigate = useNavigate();

    function toHome(){
        navigate('/');
    }

    function toHistory(){
        navigate('/history');
    }

    function toSettings(){
        navigate('/settings');
    }


    function toggleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()

        setTheme(ev => {
            const newTheme = ev === 'light' ? 'dark' : 'light'
            document.documentElement.setAttribute('data-theme', newTheme)
            return newTheme
        })

    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <nav className={styles.menu}>
            <a className={styles['menu-link']} onClick={toHome} href="#">
                <HouseIcon></HouseIcon>
            </a>

            <a className={styles['menu-link']} onClick={toHistory} href="#">
                <HistoryIcon></HistoryIcon>
            </a>

            <a className={styles['menu-link']} onClick={toSettings} href="#">
                <SettingsIcon></SettingsIcon>
            </a>

            <a className={styles['menu-link']} href="#" onClick={toggleTheme}>
                <SunsetIcon></SunsetIcon>
            </a>
        </nav>
    )
}