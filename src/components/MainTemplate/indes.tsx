import '../../styles/global.css'
import '../../styles/theme.css'
import { useRef, useState, useEffect } from 'react';
import { Logo } from '../Logo';
import { Container } from '../Container';
import { Input } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { CountDown } from '../CountDown';
import { Menu } from '../Menu';
import { Button } from '../Button';
import { Footer } from '../footer';
import { useTask } from '../../contexts/TaskContext';

type MainTemplateProps = {
    children: React.ReactNode;
};

type CountDownHandle = {
    start: () => void;
    stop: () => void;
};

export function MainTemplate({ children }: MainTemplateProps) {
    const countdownRef = useRef<CountDownHandle>(null);
    const [isRunning, setIsRunning] = useState(false);
    const taskInput = useRef<HTMLInputElement>(null);
    const { addTask, activeTask, interruptTask } = useTask();

    useEffect(() => {
        if (activeTask && !isRunning) {
            console.log('Nova tarefa criada, iniciando countdown automaticamente');
            setIsRunning(true);
            setTimeout(() => {
                countdownRef.current?.start();
            }, 100);
        }
    }, [activeTask]);

    function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        
        if (!activeTask) {
            if (!taskInput.current?.value.trim()) {
                alert("Digite uma tarefa válida.");
                return;
            }
            console.log('Criando tarefa:', taskInput.current.value);
            addTask(taskInput.current.value);
            taskInput.current.value = '';
        } else {
            console.log('Toggle countdown - isRunning:', isRunning, 'activeTask:', activeTask);
            if (isRunning) {
                countdownRef.current?.stop();
                setIsRunning(false);
                
                if (activeTask) {
                    console.log('Interrompendo tarefa:', activeTask.id);
                    interruptTask(activeTask.id);
                }
            } else {
                console.log('Iniciando countdown com tarefa:', activeTask?.name);
                countdownRef.current?.start();
                setIsRunning(true);
            }
        }
    }

    return (
          <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown ref={countdownRef} minutos={25} segundos={0} />
            </Container>

            <Container>
                <form className="form">
                    <div className="row">
                        <Input 
                            label="Nome da Tarefa" 
                            type="text" 
                            id="taskName" 
                            ref={taskInput}
                            placeholder="Digite o nome da tarefa" 
                        />
                    </div>

                    <div className="row">
                        <Cycles />
                    </div>

                    <Button 
                        type="button" 
                        isRunning={isRunning || activeTask !== null} 
                        onClick={handleButtonClick} 
                    />
                </form>
            </Container>

            <Footer />

        </> 
    );
}