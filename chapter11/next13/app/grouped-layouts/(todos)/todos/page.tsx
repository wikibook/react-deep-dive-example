import { fetchTodos } from '#services/server'

export default async function Page() {
  const todos = await fetchTodos()

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        url: /groped-layouts/todos
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
