import './App.css'
import '../src/styles/global.css'
import '../src/styles/theme.css'
import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { Input } from './components/DefaultInput'

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
          <CountDown minutos={25} segundos={0}></CountDown>
        </Heading>
      </Container>

      <Container>
        <form action="" className="form">
          <div className="row">
              <Input label='Configuracoes' type={"text"} id='input' placeholder='Digite algo ai' ></Input>
          </div>

          <div className="row">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
            <p> 0 0. 0 0 0 0 0 0 00 0 0 </p>
          </div>

          <div className="row">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}

export default App
