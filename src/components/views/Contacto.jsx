import React from 'react';
import { Container } from 'react-bootstrap';
import {FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa"
import {FiMail} from "react-icons/fi"

const Contacto = () => {
    return (
        <Container className='text-light p-4 text-center d-flex flex-column' id="contacto" >
            <h3 className=' titulo mb-4'>Contacto</h3>
            <h5 className='datoContacto'> <FaWhatsapp className='fs-3 mx-1'></FaWhatsapp>381-5970428</h5>
            <h5 className='datoContacto'>< FiMail className='fs-3 mx-1'></FiMail>sandovalagustin989@gmail.com</h5>
            <a href='www.linkedin.com/in/agustín-sandoval-66a819230' target='_blank' className=' datoContacto '> <FaLinkedin className='fs-3 mx-1'></FaLinkedin>Perfil de LINKEDIN</a>
            <a href='https://github.com/Agustincomics' target='_blank' className=' datoContacto '> <FaGithub className='fs-3 mx-1'></FaGithub>Perfil de GITHUB</a>
        </Container>
    );
};

export default Contacto;