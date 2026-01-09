import type React from "react"

import styles from './styles.module.css'

type InputProprs = {
    type: string,
    id: string,
    label: string
} & React.ComponentProps<'input'>

export function Input({type, id, label, ...res}: InputProprs){
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input className={styles.input} type={type} id={id} {...res}/>
        </>
    )
}