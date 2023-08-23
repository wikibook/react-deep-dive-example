import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>Chapter2 예제 코드</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Link to="/1">예제 2-1</Link> | <Link to="/4">예제 2-4</Link> |
        <Link to="/5">예제 2-5</Link> | <Link to="/7">예제 2-7</Link> |{' '}
        <Link to="/8">예제 2-8</Link> |
      </nav>
      <Outlet />
    </div>
  )
}
