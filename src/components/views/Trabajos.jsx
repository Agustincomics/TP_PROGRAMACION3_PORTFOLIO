import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import recetitas from "../../assets/Recetitas.png";
import portfolio from "../../assets/Portfolio.png";

const Trabajos = () => {
    return (
        <Container className='py-4 text-center' id="proyectos">
            <h3 className='text-center text-light titulo mb-3'>Proyectos</h3>
            <Row className='text-light d-flex justify-content-center'>
                <Col xs={11} md={4} className='text-center'>
                    <article className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={portfolio} alt=" imagen proyecto portafolio" width="100%" className='rounded' />
                        <h4 className='mt-2'>Mi portafolio</h4>
                        <a href="https://github.com/Agustincomics/TP_PROGRAMACION3_PORTFOLIO" target='_blank' className='linkProyectoGithub'>Ver Repositorio de Github</a>
                    </article>
                </Col>
                <Col xs={11} md={4} className='text-center'>
                <article className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={recetitas} alt=" imagen proyecto recetas de cocina" width="100%" className='rounded' />
                        <h4 className='mt-2'>Recetas de cocina</h4>
                        <a href="https://github.com/Agustincomics/Recetitas" target='_blank' className='linkProyectoGithub'>Ver Repositorio de Github</a>
                </article>
                </Col>

            </Row>
             <a href='https://github.com/Agustincomics' target='_blank' className=' datoContacto btn btn-warning text-dark my-4 '>GITHUB</a>
        </Container>
    );
};

export default Trabajos;