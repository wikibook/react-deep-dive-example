import React, { useState } from 'react'

import { TodoResponse } from '../fetch'

export function Todo({ todo }: { todo: TodoResponse }) {
  const { title, completed, userId, id } = todo
  const [finished, setFinished] = useState(completed)

  function handleClick() {
    setFinished((prev) => !prev)
  }

  return (
    <li>
      <span>
        {userId}-{id}) {title} {finished ? '완료' : '미완료'}
        <button onClick={handleClick}>토글</button>
      </span>
    </li>
  )
}
