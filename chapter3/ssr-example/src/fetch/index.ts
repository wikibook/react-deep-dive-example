import fetch from 'isomorphic-fetch'

export interface TodoResponse {
  userId: number
  id: number
  title: string
  completed: boolean
}

export async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const result: TodoResponse[] = await response.json()
  return result
  // 스트림의 극단적인 예제를 보고 싶다면 주석 해제
  // return Array(10).fill(result).flat()
}
