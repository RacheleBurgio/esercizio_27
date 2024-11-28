import { Container, Col } from 'react-bootstrap'

const MyFooter = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Col>
          <p>Copyright &copy; 2020-2021</p>
        </Col>
      </Container>
    </footer>
  )
}

export default MyFooter
