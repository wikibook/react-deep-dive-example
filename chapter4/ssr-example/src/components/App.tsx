import React, { useEffect } from 'react'

import { TodoResponse } from '../fetch'

import { Todo } from './Todo'

export default function App({ todos }: { todos: Array<TodoResponse> }) {
  useEffect(() => {
    console.log('하이!') // eslint-disable-line no-console
  }, [])

  return (
    <>
      <h1>나의 할일!</h1>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </>
  )
}
