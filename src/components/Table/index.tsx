import React from 'react';

import styles from './stles.module.css';

export function Table() {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableHeader}>Tarefa</th>
                        <th className={styles.tableHeader}>Duração</th>
                        <th className={styles.tableHeader}>Início</th>
                        <th className={styles.tableHeader}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>Duração</td>
                        <td>Início</td>
                        <td>Status</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}