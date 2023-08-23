import Link from 'next/link'
import { NextPageContext } from 'next'

export default function Todo({
  todo,
}: {
  todo: { userId: number; id: number; title: string; completed: boolean }
}) {
  return (
    <>
      <h1>{todo.title}</h1>
      <ul>
        <li>
          <Link href="/todo/1">1번</Link>
        </li>

        <li>
          <Link href="/todo/2">2번</Link>
        </li>

        <li>
          <Link href="/todo/3">3번</Link>
        </li>
      </ul>
    </>
  )
}

Todo.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { id = '' },
    // asPath,
    // query,
    // res,
  } = ctx
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  )
  const result = await response.json()
  return { todo: result }
}
