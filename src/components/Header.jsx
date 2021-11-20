import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Consulta el clima de tu ciudad</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Header
