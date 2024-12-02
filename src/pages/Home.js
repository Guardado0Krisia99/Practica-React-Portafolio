import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <section className="home">
      <div>
        <h1>Soy Krisia Guardado.</h1>
        <p>Soy una <strong>Backend Developer</strong> especializado en PHP y Python.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/share/15jjhn8mrX/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/mejiakrisia/profilecard/?igsh=MWYxZDdhb2U0M2Vmdg==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/Guardado0Krisia99" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;