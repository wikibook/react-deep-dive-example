import { fireEvent, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { FetchComponent } from '.'

const MOCK_TODO_RESPONSE = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
}

const server = setupServer(
  rest.get('/todos/:id', (req, res, ctx) => {
    const todoId = req.params.id

    if (Number(todoId)) {
      return res(ctx.json({ ...MOCK_TODO_RESPONSE, id: Number(todoId) }))
    } else {
      return res(ctx.status(404))
    }
  }),
)

beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers());
afterAll(() => server.close())

beforeEach(() => {
  render(<FetchComponent />)
})

describe('FetchComponent 테스트', () => {
  it('데이터를 불러오기 전에는 기본 문구가 뜬다.', async () => {
    const nowLoading = screen.getByText(/불러온 데이터가 없습니다./)
    expect(nowLoading).toBeInTheDocument()
  })

  it('버튼을 클릭하면 데이터를 불러온다.', async () => {
    const button = screen.getByRole('button', { name: /1번/ })
    fireEvent.click(button)

    const data = await screen.findByText(MOCK_TODO_RESPONSE.title)
    expect(data).toBeInTheDocument()
  })

  it('버튼을 클릭하고 서버요청에서 에러가 발생하면 에러문구를 노출한다.', async () => {
    server.use(
      rest.get('/todos/:id', (req, res, ctx) => {
        return res(ctx.status(503))
      }),
    )

    const button = screen.getByRole('button', { name: /1번/ })
    fireEvent.click(button)

    const error = await screen.findByText(/에러가 발생했습니다/)
    expect(error).toBeInTheDocument()
  })
})
