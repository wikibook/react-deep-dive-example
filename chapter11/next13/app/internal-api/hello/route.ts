import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ name: 'hello' }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
