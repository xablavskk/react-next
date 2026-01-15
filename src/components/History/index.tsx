import { Container } from '../Container'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { Table } from '../Table'
import { Footer } from '../footer'

export function History() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <Table></Table>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </>
  )
}
