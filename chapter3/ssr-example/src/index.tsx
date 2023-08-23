import React from 'react'
import { hydrate } from 'react-dom'

import App from './components/App'
import { fetchTodo } from './fetch'

async function main() {
  const result = await fetchTodo()

  const app = <App todos={result} />
  const el = document.getElementById('root')

  hydrate(app, el)
}

main()
