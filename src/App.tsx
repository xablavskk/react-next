import '../src/styles/global.css'
import '../src/styles/theme.css'
import { useRef, useState } from 'react'
import { CounterProvider, useCounter } from './contexts/CounterContext'
import { TaskProvider } from './contexts/TaskContext'
import { Router } from './components/Router'

function AppContent() {
  const [taskSate, setTaskState] = useState<any>(null)
  const { cycle, interruptDate, setInterruptDate } = useCounter();

  const taskInput = useRef<HTMLInputElement>(null);

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(taskInput.current === null) return

    let taskName = taskInput.current.value;

    if(!taskName) {
      alert("Digite uma tarefa valida.");
      return;
    }

    const newTask: any = {
      id: new Date().getTime(),
      name: taskName,
      startDate: new Date(),
      completeDate : null,
      interruptDate: interruptDate,
      cycle: 0,
      duration: 1,
      type: 'workTime'
    }

    setTaskState((prev: { tasks: any }) => {
      return {
        ...prev,
        activeTask: newTask,
        currentCycle: 1,
        secondesRemaining: newTask.duration * 60,
        formattedSecondsRemaining: `${String(Math.floor(newTask.duration)).padStart(2, '0')}:00`,
        tasks: [...prev?.tasks || [], newTask]
      }
    });

    setInterruptDate(null);
    taskInput.current.value = '';
  }
  return (
    <Router />
  )
}

export default function App() {
  return (
    <CounterProvider>
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </CounterProvider>
  )
}

