import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <section className="contact">
        <h2>Contáctame</h2>
        <p>Puedes contactarme a través de mi correo electrónico:</p>
        <h2>krisiaguardado5@gmail.com</h2>
        <p>Sígueme en mis redes sociales:</p>
        <div className="social-links">
            <a href="https://www.facebook.com/share/15jjhn8mrX/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/mejiakrisia/profilecard/?igsh=MWYxZDdhb2U0M2Vmdg==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/Guardado0Krisia99" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
        </section>
    );
}
   
    

export default Contact;