import Countdown, { zeroPad, type CountdownRenderProps} from 'react-countdown';
import styles from './styles.module.css';
import { useRef } from 'react';
import { useCounter } from '../../contexts/CounterContext';

type CountDownProps = {
    minutos: number;
    segundos: number;
};

const renderer = ({ minutes, seconds }: CountdownRenderProps) => {
    return (
        <span>
            {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
    );
};

export function CountDown({ minutos, segundos }: CountDownProps) {
    const totalMs = (minutos * 60 + segundos) * 1000;
    const countdownRef = useRef<Countdown | null>(null);
  const { count, increment, cycle, incrementCycle, setInterruptDate } = useCounter();

  const handlePause = () => {
    countdownRef.current?.stop();
    setInterruptDate(new Date());
  };

  const handleComplete = () => {
    incrementCycle();
    countdownRef.current?.start();
  };

  return (
    <div className={styles.container}>
      <Countdown
        ref={countdownRef}
        date={Date.now() + totalMs}
        autoStart={false}
        renderer={renderer}
        onComplete={handleComplete}
      />

        <div className={styles.controls}>
          <button onClick={handlePause}>
            PAUSAR
          </button>

          <button onClick={() => countdownRef.current?.start()}>
            Iniciar
          </button>
        </div>

        <div className={styles.globalCounter}>
          <span>Ciclo: {cycle}</span>
          <button onClick={increment}>+1</button>
        </div>
    </div>
  );
}