import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <>
      <nav id='nav'>
        <img id='logo' src='/somos/SOMOSac_final_blanco.png' alt='logo' />
      </nav>

      <section id='cover'>
        <img src='/somos/event2024.jpg' alt='evento2024' />
        <div id='overlay'></div>
        <div id='content'>
          <h1>SOMOS Union</h1>
          <p>Nuestro objetivo es subsanar el tejido social de nuestra ciudad. Mejorando la calidad de vida de las personas</p>
        </div>
      </section>

      <section id='patreons'>
        <img src="/somos/coprev.jpeg" alt="coprev-logo" />
        <img src="/somos/red-emprende.png" alt="red-emprende-logo" />
        <img src="/somos/redpro.png" alt="redpro-logo" />
      </section>

      <section id='event'>
        <p>Bienvenido a la pagina principal de Somos A.C.</p>
      </section>
      
      <footer>Contacto</footer>
    </>
  </React.StrictMode>
);
