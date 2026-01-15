import styles from './styles.module.css'


export function Footer() {
    return (
        <footer>
            <p className={styles['footer-text']}>© {new Date().getFullYear()} My Company. All rights reserved.</p>
        </footer>
    )
}