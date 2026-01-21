import React from 'react';

import styles from './stles.module.css';
import { useTask } from '../../contexts/TaskContext';
import type { TaskModel } from '../../models/taskModel';

export function Table() {
    const { tasks } = useTask()

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleString('pt-BR');
    }

    const getStatus = (task: TaskModel) => {
        if (task.completeDate) return 'Completa';
        if (task.interruptedDate) return 'Interrompida';
        return 'Pendente';
    }

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
                    {tasks.length === 0 ? (
                        <tr>
                            <td colSpan={4} style={{ textAlign: 'center', padding: '2rem' }}>
                                Nenhuma tarefa criada
                            </td>
                        </tr>
                    ) : (
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.name}</td>
                                <td>{task.duration} min</td>
                                <td>{formatDate(task.startDate)}</td>
                                <td>{getStatus(task)}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}