import Countdown, { zeroPad, type CountdownRenderProps } from 'react-countdown';
import styles from './styles.module.css';
import { useRef, forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { useCounter } from '../../contexts/CounterContext';
import { useTask } from '../../contexts/TaskContext';

type CountDownProps = {
    minutos: number;
    segundos: number;
};

type CountDownHandle = {
    start: () => void;
    stop: () => void;
};

const renderer = ({ minutes, seconds }: CountdownRenderProps) => {
    return (
        <span>
            {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
    );
};

const getTimeByType = (cycle: number) => {
    const cycleType = cycle % 2 === 1 ? 'working' : cycle === 8 ? 'long-break' : 'short-break';
    
    switch(cycleType) {
        case 'working':
            return 25 * 60 * 1000;
        case 'short-break':
            return 5 * 60 * 1000;
        case 'long-break':
            return 15 * 60 * 1000;
        default:
            return 25 * 60 * 1000;
    }
};

export const CountDown = forwardRef<CountDownHandle, CountDownProps>(
  function CountDown({  }, ref) {
    const countdownRef = useRef<Countdown | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [targetDate, setTargetDate] = useState(Date.now() + getTimeByType(1));
    const { incrementCycle, cycle } = useCounter();
    const { activeTask, completeTask } = useTask();

    const handleCountdownComplete = () => {
      console.log('Countdown completou!');
      console.log('Active Task:', activeTask);
      setIsRunning(false);
      
      if (activeTask) {
        console.log('Chamando completeTask com ID:', activeTask.id);
        completeTask(activeTask.id);
      } else {
        console.log('Nenhuma tarefa ativa para completar');
      }
      
      incrementCycle();
    };

    useEffect(() => {
        const timeMs = getTimeByType(cycle);
        setTargetDate(Date.now() + timeMs);
        
        console.log('CountDown - Cycle changed:', cycle, 'Active Task:', activeTask);
        
        if (isRunning) {
            setTimeout(() => {
                countdownRef.current?.start();
            }, 100);
        }
    }, [cycle, isRunning, activeTask]);

    useImperativeHandle(ref, () => ({
      start: () => {
        setIsRunning(true);
        countdownRef.current?.start();
      },
      stop: () => {
        setIsRunning(false);
        countdownRef.current?.pause();
      },
    }));

    return (
      <div className={styles.container}>
        <Countdown
          ref={countdownRef}
          date={targetDate}
          autoStart={false}
          renderer={renderer}
          onComplete={handleCountdownComplete}
        />
      </div>
    );
  }
);
