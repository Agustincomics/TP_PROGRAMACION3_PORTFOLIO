import React from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import capturaCv from '../../assets/capturaCv.png'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    CV - Agustin Sandoval
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={capturaCv} alt="Cv de AgustinSandoval"/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Volver</Button>
            </Modal.Footer>
        </Modal>
    );
}


const SobreMi = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container className='text-light p-4' id='sobremi' >
            <h3 className='text-center titulo mb-3'>Sobre mí</h3>
            <h5>¿Quién soy?</h5>
            <h6>Hola! Mi nombre es Agustín Sandoval! Tengo 20 años. Me considero un joven apasionado de la tecnologica y la programacion. <br />
                Me gusta aprender nuevas tecnologías, solucionar problemas y adaptarme a nuevos conocimientos o lenguajes.</h6>
            <Button variant='warning' className='my-2' onClick={() => setModalShow(true)}> Ver CV </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    );
};

export default SobreMi;