import type React from "react"

import styles from './styles.module.css'
import { useCounter } from "../../contexts/CounterContext"

export function Cycles(){
    const { cycle } = useCounter()

    const getCycleType = (cycleNumber: number) => {
        if (cycleNumber % 2 === 1) return 'working'
        if (cycleNumber === 8) return 'long-break'
        return 'short-break'
    }

    const cycleType = getCycleType(cycle)

    return (
        <>
            <p>Ciclo: {cycle}</p>

            <div className={styles['cycles-container']}>
                <span className={`${styles.cycle} ${styles[cycleType]}`}></span>
            </div>
        </>
    )
}