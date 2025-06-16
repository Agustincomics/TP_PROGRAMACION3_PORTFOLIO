import { useState } from 'react'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/common/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './components/views/Banner';
import SobreMi from './components/views/SobreMi';
import Experiencia from './components/views/Experiencia';
import Conocimientos from './components/views/Conocimientos';
import Contacto from './components/views/Contacto';
import Educacion from './components/views/Educacion';
import Trabajos from './components/views/Trabajos';
import Menu from './components/common/Menu';

function App() {

  return (
    <>
     <Menu></Menu>
      <div className='main bg-dark m-0'>
        <Banner></Banner>
        <Container className='my-4'>
          <Row>
            <Col xs={12} md={6}>
              <SobreMi></SobreMi>
            </Col>
            <Col xs={12} md={6}>
              <Experiencia></Experiencia>
            </Col>
          </Row>
          <Conocimientos></Conocimientos>
          <Row>
            <Col xs={12} md={6}>
              <Contacto></Contacto>
            </Col>
            <Col xs={12} md={6}>
              <Educacion></Educacion>
            </Col>
          </Row>
          <Trabajos></Trabajos>

        </Container>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
