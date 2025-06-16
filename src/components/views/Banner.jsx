import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import imgAgustin from "../../assets/WhatsApp Image 2023-07-30 at 12.05.44 PM.jpeg"

const Banner = () => {
    return (
        <Container fluid="xs" id='home' >
            <Row className="portada m-0">
                <Col xs={12} md={6} className='contenedor-imagen  '>
                    <img src={imgAgustin} alt="Imagen perfil Agustín Sandoval" className='w-75 mb-5 rounded-circle img-portada' />
                </Col>
                <Col xs={12} md={6} className='contenedor-textoPortada  '>
                    <article className='articleInfo'>
                        <h1 className='text-light fw-bold text-nombre'>Agustín Sandoval</h1>
                        <h3 className='text-puesto'>Desarrollador Full Stack</h3>
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;