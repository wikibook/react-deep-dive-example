import { GetServerSideProps } from 'next'

import { Todo } from '#types/todo'
import withGetServerSideProps, { NotFoundError } from '#utils/errors'

export default function TodoItem({ todo }: { todo: Todo }) {
  return <div>Todo: {todo.title}</div>
}

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    const id = ctx.params?.id

    if (!id) {
      throw new NotFoundError(id)
    }

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    )

    if (response.status === 404) {
      throw new NotFoundError(id)
    }

    return {
      props: {
        todo: await response.json(),
      },
    }
  },
)
