import { Container } from '../Container'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { Footer } from '../footer'
import styles from './styles.module.css'

export function Settings(){
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <div className={styles.settingsContainer}>
          <h2>Configurações</h2>
          <p>
            Bem-vindo à página de configurações do seu aplicativo Pomodoro! Aqui você pode ajustar 
            as preferências do seu cronômetro para melhor adaptar-se ao seu fluxo de trabalho. 
            As configurações padrão são otimizadas para a técnica Pomodoro clássica com intervalos 
            de 25 minutos de trabalho e pausas de 5 minutos. Você pode personalizar os tempos de 
            trabalho, pausas curtas e longas de acordo com suas necessidades. Além disso, é possível 
            gerenciar o tema da aplicação, ativar notificações e revisar o histórico de tarefas 
            concluídas para acompanhar sua produtividade ao longo do tempo.
          </p>
        </div>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </>
  )
}