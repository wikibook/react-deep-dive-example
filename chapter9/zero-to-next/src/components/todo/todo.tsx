import { useMemo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import useToggle from '#hooks/useToggle'
import { Todo } from '#types/todo'

const Anchor = styled.a`
  text-decoration: none;
`

export function TodoComponent({ todos }: { todos: Array<Todo> }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export function TodoItem({ todo }: { todo: Todo }) {
  const { id, userId, complete, title } = todo
  const [completed, toggle] = useToggle(complete)

  const toggleId = useMemo(() => {
    return `toggle_${id}`
  }, [id])

  return (
    <li>
      <input
        id={toggleId}
        type="checkbox"
        checked={completed}
        onChange={toggle}
      />

      <label htmlFor={toggleId}>
        <Link href={{ pathname: '/todos/[id]', query: { id } }} passHref>
          <Anchor>{title}</Anchor>
        </Link>{' '}
        by {userId}
      </label>
    </li>
  )
}
