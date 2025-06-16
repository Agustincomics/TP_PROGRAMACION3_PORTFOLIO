import React from 'react';
import { Container } from 'react-bootstrap';

const Educacion = () => {
    return (
        <Container className='text-light text-center p-4' id="educacion" >
            <h3 className=' titulo mb-4'>Educación</h3>
            <h5 className='fw-bold'>Universidad Nacional de Tucuman - UNT</h5>
            <h6>Programador Universitario</h6>
            <br />
            <h5 className='fw-bold'>RollingCode</h5>
            <h6>Curso de Programacion Web FullStack</h6>
            <br />
            <h5 className='fw-bold'>Argentina Programa</h5>
            <h6>Programador Full Stack</h6>
            <br />
            <h5 className='fw-bold'>Universitat Politècnica de València - UPV</h5>
            <h6>Curso Python</h6>
        </Container>
    );
};

export default Educacion;