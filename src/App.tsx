import '../src/styles/global.css'
import '../src/styles/theme.css'
import { Routes, Route } from 'react-router-dom'
import { MainTemplate } from './components/MainTemplate/indes'
import { History } from './components/History'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate children={<></>} />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default App
