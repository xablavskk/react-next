import React, { createContext, useContext, useCallback, useMemo, useState, type ReactNode } from 'react';
import type { TaskModel } from '../models/taskModel';

type TaskContextType = {
  tasks: TaskModel[];
  activeTask: TaskModel | null;
  addTask: (name: string) => void;
  completeTask: (taskId: string) => void;
  interruptTask: (taskId: string) => void;
  setActiveTask: (task: TaskModel | null) => void;
  removeTask: (taskId: string) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [activeTask, setActiveTask] = useState<TaskModel | null>(null);

  React.useEffect(() => {
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  React.useEffect(() => {
    console.log('Active Task changed:', activeTask);
  }, [activeTask]);

  const addTask = useCallback((name: string) => {
    console.log('addTask chamado com nome:', name);
    const newTask: TaskModel = {
      id: new Date().getTime().toString(),
      name,
      duration: 25,
      startDate: Date.now(),
      type: 'workTime',
    };
    
    console.log('Nova tarefa criada:', newTask);
    setTasks(prev => [...prev, newTask]);
    setActiveTask(newTask);
  }, []);

  const completeTask = useCallback((taskId: string) => {
    console.log('Completando tarefa:', taskId);
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, completeDate: Date.now() }
          : task
      )
    );
    
    setActiveTask(prev => prev?.id === taskId ? null : prev);
  }, []);

  const interruptTask = useCallback((taskId: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, interruptedDate: Date.now() }
          : task
      )
    );
    
    setActiveTask(prev => prev?.id === taskId ? null : prev);
  }, []);

  const removeTask = useCallback((taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
    
    setActiveTask(prev => prev?.id === taskId ? null : prev);
  }, []);

  const value = useMemo(
    () => ({
      tasks,
      activeTask,
      addTask,
      completeTask,
      interruptTask,
      setActiveTask,
      removeTask,
    }),
    [tasks, activeTask, addTask, completeTask, interruptTask, removeTask]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTask() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTask must be used within TaskProvider');
  return ctx;
}

export default TaskContext;
