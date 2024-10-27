import React from 'react';
// import logo from '../assets/img/logo-DH.png';
import '../styles/Footer.css';

function Footer(){
    return (
        <footer  className="pie">
            {/* <nav id="logo">
                <a href="#"><img src={logo} alt="Logo Digital House"/></a>
            </nav> */}
            <nav id="opciones">
                <ul>
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
                <p>&copy; {new Date().getFullYear()} Sistema de Peajes. Todos los derechos reservados.</p>
            </nav>
        </footer>
    )
}
export default Footer;

