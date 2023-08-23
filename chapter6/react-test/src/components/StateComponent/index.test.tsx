import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { InputComponent } from '.'

describe('InputComponent 테스트', () => {
  const setup = () => {
    const screen = render(<InputComponent />)
    const input = screen.getByLabelText('input') as HTMLInputElement
    const button = screen.getByText(/제출하기/i) as HTMLButtonElement
    return {
      input,
      button,
      ...screen,
    }
  }

  it('input의 초기값은 빈 문자열이다.', () => {
    const { input } = setup()
    expect(input.value).toEqual('')
  })

  it('input의 최대길이가 20자로 설정되어 있다.', () => {
    const { input } = setup()
    expect(input).toHaveAttribute('maxlength', '20')
  })

  it('영문과 숫자만 입력된다.', () => {
    const { input } = setup()
    const inputValue = '안녕하세요123'
    userEvent.type(input, inputValue)
    expect(input.value).toEqual('123')
  })

  it('아이디를 입력하지 않으면 버튼이 활성화 되지 않는다.', () => {
    const { button } = setup()
    expect(button).toBeDisabled()
  })

  it('아이디를 입력하면 버튼이 활성화 된다.', () => {
    const { button, input } = setup()

    const inputValue = 'helloworld'
    userEvent.type(input, inputValue)

    expect(input.value).toEqual(inputValue)
    expect(button).toBeEnabled()
  })

  it('버튼을 클릭하면 alert가 해당 아이디로 뜬다.', () => {
    const alertMock = jest
      .spyOn(window, 'alert')
      .mockImplementation((_: string) => undefined)

    const { button, input } = setup()
    const inputValue = 'helloworld'

    userEvent.type(input, inputValue)
    fireEvent.click(button)

    expect(alertMock).toHaveBeenCalledTimes(1)
    expect(alertMock).toHaveBeenCalledWith(inputValue)
  })
})
