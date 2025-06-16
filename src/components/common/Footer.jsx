import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube, FaTwitter, FaLocationArrow, FaLinkedin } from 'react-icons/fa';
import '../../App.css';

const Footer = () => {

  const urlGoogle = "https://www.google.com/maps/search/?api=1&query=General+Paz+576%2C+T4000+San+Miguel+de+Tucumán%2C+Tucumán";

  return (
    <footer className='bg-dark text-light text-center p-4'>
            <h3>&copy; Todos los derechos reservados - Agustin Sandoval</h3>
        </footer>
  );
};

export default Footer;