import React, { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Counter updated:', count);
  }, [count]);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  const value = useMemo(() => ({ count, increment, decrement, reset }), [count]);

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error('useCounter must be used within CounterProvider');
  return ctx;
}

export default CounterContext;
