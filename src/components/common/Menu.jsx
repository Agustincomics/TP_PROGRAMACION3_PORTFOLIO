import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap"

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-dark navBar">
            <Container>
                <Navbar.Brand href="#home" className='text-light fw-bold'> 
                ¡Bienvenido!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-secondary' />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                        <Nav.Link className="text-light text-hover" href="#sobremi">Sobre mí</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#experiencia">Experiencia</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#conocimientos">Conocimientos</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#contacto">Contacto</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#educacion">Educacion</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#proyectos">Proyectos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;