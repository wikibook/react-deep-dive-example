import { useState } from 'react'

export function InputComponent() {
  const [text, setText] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = event.target.value
    const value = rawValue.replace(/[^A-Za-z0-9]/gi, '')
    setText(value)
  }

  function handleButtonClick() {
    alert(text)
  }

  return (
    <>
      <label htmlFor="input">아이디를 입력하세요.</label>
      <input
        aria-label="input"
        id="input"
        value={text}
        onChange={handleInputChange}
        maxLength={20}
      />
      <button onClick={handleButtonClick} disabled={text.length === 0}>
        제출하기
      </button>
    </>
  )
}
