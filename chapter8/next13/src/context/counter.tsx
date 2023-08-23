'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  ReactNode,
} from 'react'

const CounterContext = createContext<
  [number, Dispatch<SetStateAction<number>>] | undefined
>(undefined)

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={[count, setCount]}>
      {children}
    </CounterContext.Provider>
  )
}

export function useCounter() {
  const context = useContext(CounterContext)

  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider')
  }
  return context
}
