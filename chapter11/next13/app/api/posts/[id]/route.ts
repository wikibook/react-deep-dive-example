import type { NextRequest } from 'next/server'

export async function GET(
  req: NextRequest,
  context: { params: { id: string } },
) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
  )
  console.log(context)
  const result = await response.json()

  const now = new Date()
  const nowStr = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`

  // eslint-disable-next-line no-console
  console.log('request has been resolved', nowStr)
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
