import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

export const Home = () => {
    return (
        <div className="center-container">
            <h1>Bienvenidos al Banco D&E </h1>
            
            {/* Agregar logo  */}
            <img
                src="https://media.discordapp.net/attachments/1144397410571919470/1167567385893535815/image-removebg-preview.png?ex=656a485d&is=6557d35d&hm=d6908bca08816a45e09fb96de1bbb4052c463ac8eef99c497f561f7ebb8f7309&=&width=342&height=325"
                alt="Logo del Banco"
                className="logo"
            />

            <div className="container-row">
                 <div className="boto" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/clientes">
                         <button type="button" className="btn-custom">
                             Clientes
                            </button>
                        </Link>
                </div>
                    <div className="boton">
                        <Link to="/transacciones">
                         <button type="button" className="btn-custom">
                            Transacciones
                         </button>
                        </Link>
                    </div>
            </div>
        </div>
    );
};