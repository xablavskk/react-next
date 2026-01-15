import type React from "react"

import styles from './styles.module.css'

export function Cycles(){
    return (
        <>
            <p>Ciclos: </p>

            <div className={styles['cycles-container']}>
                <span className={`${styles.cycle} ${styles.cycle}`}></span>
                <span className={`${styles.cycle} ${styles.working}`}></span>
                <span className={`${styles.cycle} ${styles['short-break']}`}></span>
                <span className={`${styles.cycle} ${styles['long-break']}`}></span>
            </div>
        </>
    )
}