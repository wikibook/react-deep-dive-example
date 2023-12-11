import { Reducer, useReducer } from 'react'

const toggleReducer = (value: boolean, nextValue?: unknown) =>
  typeof nextValue === 'boolean' ? nextValue : !value

export default function useToggle(
  initialValue = false,
): [boolean, (nextValue?: unknown) => void] {
  return useReducer<Reducer<boolean, unknown>>(toggleReducer, initialValue)
}
