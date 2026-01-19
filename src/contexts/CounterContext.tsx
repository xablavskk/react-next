import React, { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  cycle: number;
  incrementCycle: () => void;
  resetCycle: () => void;
  interruptDate: Date | null;
  setInterruptDate: (date: Date | null) => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(1);
  const [interruptDate, setInterruptDate] = useState<Date | null>(null);

  useEffect(() => {
    console.log('Counter updated:', count);
  }, [count]);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  const incrementCycle = () => {
    setCycle((c) => {
      const newCycle = c + 1;
      if (newCycle > 8) {
        setCount(0);
        return 1;
      }
      return newCycle;
    });
  };

  const resetCycle = () => setCycle(1);

  const value = useMemo(() => ({ 
    count, 
    increment, 
    decrement, 
    reset,
    cycle,
    incrementCycle,
    resetCycle,
    interruptDate,
    setInterruptDate
  }), [count, cycle, interruptDate]);

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error('useCounter must be used within CounterProvider');
  return ctx;
}

export default CounterContext;
