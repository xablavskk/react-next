import { TimerIcon } from 'lucide-react'
import './App.css'
import { Heading } from './components/Heading'

import '../src/styles/global.css'
import '../src/styles/theme.css'

function App() {
  return (
    <>
      <Heading>
        Ola brasil
        <button>
          <TimerIcon></TimerIcon>
        </button>
      </Heading>
    </>
  )
}

export default App
