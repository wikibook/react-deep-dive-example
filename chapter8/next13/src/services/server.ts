interface User {
  id: number
  name: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export async function fetchUsers(): Promise<Array<User>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const result: Array<User> = await response.json()

  return result
}

export async function fetchUserById(id: string | number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  )
  const result: User = await response.json()

  return result
}

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export async function fetchTodos(): Promise<Array<Todo>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const result: Array<Todo> = await response.json()

  return result
}

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export async function fetchPosts(): Promise<Array<Post>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result: Array<Post> = await response.json()

  return result
}

export async function fetchPostById(
  id: number | string,
  options?: RequestInit,
): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    options,
  )
  const result: Post = await response.json()

  return result
}
