export async function GET() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const result = await response.json()

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
