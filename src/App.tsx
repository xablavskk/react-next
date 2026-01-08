import './App.css'
import '../src/styles/global.css'
import '../src/styles/theme.css'
import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'

function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo></Logo>
        </Heading>
      </Container>

      <Container>
        <Heading>
          <Menu></Menu>
        </Heading>
      </Container>

      <Container>
        <Heading>
          <CountDown></CountDown>
        </Heading>
      </Container>
    </>
  )
}

export default App
