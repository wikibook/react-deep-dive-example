import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await response.json()
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
