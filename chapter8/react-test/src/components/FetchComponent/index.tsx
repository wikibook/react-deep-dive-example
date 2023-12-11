import { MouseEvent, useState } from 'react'

interface TodoResponse {
  userId: number
  id: number
  title: string
  completed: false
}

export function FetchComponent() {
  const [data, setData] = useState<TodoResponse | null>(null)
  const [error, setError] = useState<number | null>(null)

  async function handleButtonClick(e: MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.dataset.id

    const response = await fetch(`/todos/${id}`)

    if (response.ok) {
      const result: TodoResponse = await response.json()
      setData(result)
    } else {
      setError(response.status)
    }
  }

  return (
    <div>
      <p>{data === null ? '불러온 데이터가 없습니다.' : data.title}</p>

      {error && <p style={{ backgroundColor: 'red' }}>에러가 발생했습니다</p>}

      <ul>
        {Array.from({ length: 10 }).map((_, index) => {
          const id = index + 1
          return (
            <button key={id} data-id={id} onClick={handleButtonClick}>
              {`${id}번`}
            </button>
          )
        })}
      </ul>
    </div>
  )
}
