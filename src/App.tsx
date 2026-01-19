import './App.css'
import '../src/styles/global.css'
import '../src/styles/theme.css'
import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { Input } from './components/DefaultInput'
import { CounterProvider, useCounter } from './contexts/CounterContext'
import { useRef, useState } from 'react'

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

    setTaskState(prev => {
      return {
        ...prev,
        activeTask: newTask,
        currentCycle: 1,
        secondesRemaining: newTask.duration * 60,
        formattedSecondsRemaining: '01:00',
        tasks: [...prev?.tasks || [], newTask]
      }
    });

    setInterruptDate(null);
    taskInput.current.value = '';
  }
  return (
    <>
      <Container>
        <Heading>
          <Logo></Logo>
        </Heading>
      </Container>

      <Container>
        <Heading>
          <Menu></Menu>
        </Heading>
      </Container>

      <Container>
        <Heading>
          <CountDown minutos={25} segundos={0}></CountDown>
        </Heading>
      </Container>

      <Container>
        <form action="" className="form">
          <div className="row">
              <Input label='Configuracoes' type={"text"} id='input' placeholder='Digite algo ai' ></Input>
          </div>

          <div className="row">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
            <p> 0 0. 0 0 0 0 0 0 00 0 0 </p>
          </div>

          <div className="row">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}

export default function App() {
  return (
    <CounterProvider>
      <AppContent />
    </CounterProvider>
  )
}

