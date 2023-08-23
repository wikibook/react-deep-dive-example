import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import App from './App'
import { Component1 } from './routes/2-1'
import SampleComponent from './routes/2-4'
import SampleComponent2 from './routes/2-5'
import CompareComponent from './routes/2-7'
import { ReactPureComponent } from './routes/2-8'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/1" element={<Component1 />} />
        <Route path="/4" element={<SampleComponent required text="hello" />} />
        <Route path="/5" element={<SampleComponent2 />} />
        <Route path="/7" element={<CompareComponent />} />
        <Route path="/8" element={<ReactPureComponent />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
