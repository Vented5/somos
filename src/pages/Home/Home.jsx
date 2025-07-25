
import { Link } from "react-router-dom"
import CountUp from "../../components/CountUp"
import './Home.css'

import Nav from '../../components/Nav/Nav'
import Footer from "../../components/Footer/Footer"

export default function Home() {
    return <>
        <Nav/>
        <section id='cover'>
            <img id='cover-img' src='./event2024.jpg' alt='evento2024' />
            <div id='overlay'></div>
            <div id='content'>
                <h1>SOMOS Unión</h1>
                <p>Nuestro objetivo es subsanar el tejido social de nuestra ciudad. <br />
                Mejorando la calidad de vida de las personas.</p>
                <Link to='/somos/transparencia'>Conoce mas 
                    <img src="./icons/plus.svg" alt="pluz icon" />
                </Link>
            </div>
            
        </section>

        <section id='patreons'>
            <p>Orgullosos colaboradores de:</p>
            <div id='carrousel'>
                <img src='./logos/coprev.jpeg' alt='coprev-logo' />
                <img src='./logos/somos.png' alt='somos-logo' />
                <img src='./logos/red-emprende.png' alt='red-emprende-logo' />
                <img src='./logos/somos.png' alt='somos-logo' />
                <img src='./logos/redpro.png' alt='redpro-logo' />
            </div>
            { /* ---------  Duplicado  ----------*/ }
            <div id='carrousel2'>
                <img src='./logos/coprev.jpeg' alt='coprev-logo' />
                <img src='./logos/somos.png' alt='somos-logo' />
                <img src='./logos/red-emprende.png' alt='red-emprende-logo' />
                <img src='./logos/somos.png' alt='somos-logo' />
                <img src='./logos/redpro.png' alt='redpro-logo' />
            </div>
        
        </section>

        <section id='statistics'>
            <div>
                <p>Proximo evento</p>
                <div className="statistic">
                    <h1>Name del evento</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path></svg>
                </div>
                <p>15 de Julio 2025</p>
                <p>Club de leones</p>
            </div>
            <div>
                <p>Comunidad</p>
                <div className="statistic">
                <h1><CountUp end={500} duration={1700} /></h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path></svg>
                </div>
                <p>Nuevos</p>
                <p>Participantes</p>
            </div>
            <div>
                <p>Eventos realizados</p>
                <div className="statistic">
                <h1><CountUp end={42} duration={1700} /></h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,218.76,50c-28,24.23-51.72,12.49-79.21-1.12C111.07,34.76,78.78,18.79,42.76,50ZM216,172.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path></svg>
                </div>
                <p>Eventos a nivel</p>
                <p>estatal</p>
            </div>
            <div>
                <p>Recursos recaudados</p>
                <div className="statistic">
                <h1><CountUp end={15} duration={1700} /> mdp</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path></svg>
                </div>
                <p>Donados a apoyos</p>
                <p>comunitarios</p>
            </div>
        </section>

        <section id='events'>
            <h1>Hecha un vistazo a nuestras ultimas actividades</h1>
        
            <div className="event">
                <img src="./event3.jpg" alt="event" />
                <div>
                    <p></p>
                    <h2>7o MiFAM Canaco</h2>
                    <p>
                        En pro del desarrollo familiar.... descripcion objetivo del evento
                    </p>
                    <p id="date">fecha de inicio: 20 de junio 2025
                    En Cedefam Vallarta</p>
                </div>
                
            </div>

            <h1>Asiste a nuestro proximo evento!</h1>
            <div className="event">
                <div>
                    <p></p>
                    <h2>7o MiFAM Canaco</h2>
                    <p>
                        En pro del desarrollo familiar.... descripcion objetivo del evento
                    </p>
                    <p id="date">fecha de inicio: 20 de junio 2025
                    En Cedefam Vallarta</p>
                </div>
                <img src="./event.jpg" alt="event" />
            </div>
            
            
        </section>

        <Footer></Footer>
    </>
}