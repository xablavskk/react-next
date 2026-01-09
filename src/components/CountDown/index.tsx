import Countdown, { zeroPad, type CountdownRenderProps, type CountdownApi } from 'react-countdown';
import styles from './styles.module.css';
import { useRef } from 'react';

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
    const countdownRef = useRef<CountdownApi | null>(null);


  return (
    <div className={styles.container}>
      <Countdown
        ref={countdownRef}
        date={Date.now() + totalMs}
        autoStart={false}
        renderer={renderer}
      />

      <button onClick={() => countdownRef.current?.stop()}>
        PAUSAR
      </button>

      <button onClick={() => countdownRef.current?.start()}>
        Iniciar
      </button>
    </div>
  );
}