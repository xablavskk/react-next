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
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(1);
  const [interruptDate, setInterruptDate] = useState<Date | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    return saved || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(() => ({ 
    count, 
    increment, 
    decrement, 
    reset,
    cycle,
    incrementCycle,
    resetCycle,
    interruptDate,
    setInterruptDate,
    theme,
    toggleTheme
  }), [count, cycle, interruptDate, theme]);

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error('useCounter must be used within CounterProvider');
  return ctx;
}

export default CounterContext;
