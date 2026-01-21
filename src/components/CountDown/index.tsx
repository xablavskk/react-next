import Countdown, { zeroPad, type CountdownRenderProps } from 'react-countdown';
import styles from './styles.module.css';
import { useRef, forwardRef, useImperativeHandle, useState } from 'react';

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

export const CountDown = forwardRef<CountDownHandle, CountDownProps>(
  function CountDown({ minutos, segundos }, ref) {
    const totalMs = (minutos * 60 + segundos) * 1000;
    const countdownRef = useRef<Countdown | null>(null);
    const [isRunning, setIsRunning] = useState(false);

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
          date={Date.now() + totalMs}
          autoStart={false}
          renderer={renderer}
        />
      </div>
    );
  }
);
