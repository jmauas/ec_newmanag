import React from "react";
import './NavBar.css';
import { FaFutbol, FaCaretSquareRight as Flecha, FaScroll, FaBirthdayCake as Torta, FaShoppingCart as Carro} from 'react-icons/fa';
import {TiHome} from 'react-icons/ti';

export const NavBar = ({nombreEmpresa, urlLogoPpal}) => {
    return (
        <>
            <nav className="sideBar">
                <div className="barraNegra">'
                    <Flecha color="#FF305D" size="40px"/>    
                </div>
                <p className="s-nombre">{nombreEmpresa}</p>

                <ul>
                    <li><a href="#/" onClick="" className="items"><TiHome color="#FF305D" size="25px"/> Inicio</a></li>
                    <li><a href="#/" onClick="filtrar(2)" className="items"><FaFutbol color="#00CBF4" size="25px"/> Cotillón</a></li>
                    <li><a href="#/" onClick="filtrar(3)" className="items"><FaScroll color="#FFC200" size="25px"/> Papeleria</a></li>
                    <li><a href="#/" onClick="filtrar(1)" className="items"><Torta color="#FF305D" size="25px"/> Repostería</a></li>
                    <li><a href="#/" onClick="filtrar(4)" className="items"><FaFutbol color="#FFC200" size="25px"/> Distribución</a></li>
                    <li><a href="#/" onClick="" className="items"><Carro color="red" size="25px"/> VER CARRITO</a></li>
                </ul>
                <img src={urlLogoPpal}  className="s-logo" alt="logoPpal" />
            </nav>
        </>
    );
 }