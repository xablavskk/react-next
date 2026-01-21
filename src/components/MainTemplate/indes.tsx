import '../../styles/global.css'
import '../../styles/theme.css'
import { useState, useRef } from 'react';
import { Logo } from '../Logo';
import { Container } from '../Container';
import { Menu } from '../Menu';
import { Footer } from '../footer';
import { Input } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { CountDown } from '../CountDown';
import { Button } from '../Button';

type MainTemplateProps = {
    children: React.ReactNode;
};

type CountDownHandle = {
    start: () => void;
    stop: () => void;
};

export function MainTemplate({ children }: MainTemplateProps) {
    const [numero, setNumero] = useState(0);
    const countdownRef = useRef<CountDownHandle>(null);
    const [isRunning, setIsRunning] = useState(false);

    function incrementar() {
        setNumero(numero + 1);
    }

    function handleToggleCountdown() {
        if (isRunning) {
            countdownRef.current?.stop();
            setIsRunning(false);
        } else {
            countdownRef.current?.start();
            setIsRunning(true);
        }
    }

    return (
        <>
      <Container>
          <Logo></Logo>
      </Container>

      <Container>
          <Menu></Menu>
      </Container>

      <Container>
          <CountDown ref={countdownRef} minutos={25} segundos={0}></CountDown>
      </Container>

      {children}

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
            <Cycles></Cycles>
          </div>

          <div className="row">
            <button>Enviar</button>
          </div>
        </form>
      </Container>

        <Container>
            <Button isRunning={isRunning} onClick={handleToggleCountdown}></Button>

        </Container>

      <Footer></Footer>
    </>
  );
}