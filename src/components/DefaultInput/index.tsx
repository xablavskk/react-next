import type React from "react"

import styles from './styles.module.css'
import { forwardRef } from "react";

type InputProps = {
    type: string,
    id: string,
    label: string
} & React.ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
    function Input({type, id, label, ...res}, ref){
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input className={styles.input} type={type} id={id} ref={ref} {...res}/>
            </>
        )
    }
)